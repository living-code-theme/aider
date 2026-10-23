import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { setTimeout as delay } from 'node:timers/promises';

const root = new URL('../', import.meta.url);

test('the screenshot provider serves only the declared local demo, in JSON and SSE', { timeout: 10_000 }, async t => {
  const temporary = await mkdtemp(join(tmpdir(), 'aider-capture-provider-'));
  const portFile = join(temporary, 'port');
  const provider = spawn('python3', [fileURLToPath(new URL('capture/provider.py', root)),
    portFile, fileURLToPath(new URL('capture/review.md', root))], { stdio: ['ignore', 'ignore', 'pipe'] });
  let diagnostics = '';
  provider.stderr.setEncoding('utf8').on('data', text => { diagnostics += text; });
  t.after(async () => {
    if (provider.exitCode === null && provider.signalCode === null) {
      const stopped = once(provider, 'exit');
      provider.kill();
      await stopped;
    }
    await rm(temporary, { recursive: true, force: true });
  });
  let port;
  for (let attempt = 0; attempt < 100; attempt++) {
    try { port = Number(await readFile(portFile, 'utf8')); break; }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    assert.equal(provider.exitCode, null, diagnostics);
    await delay(25);
  }
  assert.ok(port > 0, `provider did not become ready: ${diagnostics}`);
  const origin = `http://127.0.0.1:${port}`;
  const post = (path, stream) => fetch(origin + path, { method: 'POST',
    headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ model: 'local-demo', stream }) });
  const review = await readFile(new URL('capture/review.md', root), 'utf8');

  const json = await post('/v1/chat/completions', false);
  assert.equal(json.status, 200);
  const completion = await json.json();
  assert.equal(completion.choices[0].message.content, review);
  assert.equal(completion.choices[0].finish_reason, 'stop');
  assert.equal(completion.usage.total_tokens, 0);

  const stream = await post('/v1/chat/completions', true);
  assert.equal(stream.headers.get('content-type'), 'text/event-stream');
  const events = (await stream.text()).trim().split('\n\n').map(event => event.slice('data: '.length));
  assert.equal(events.pop(), '[DONE]');
  const chunks = events.map(event => JSON.parse(event));
  assert.equal(chunks.map(chunk => chunk.choices[0].delta.content ?? '').join(''), review);
  assert.equal(chunks.at(-1).choices[0].finish_reason, 'stop');

  const unknown = await post('/v1/not-a-provider-route', false);
  assert.equal(unknown.status, 404, 'unknown routes must not proxy to any external provider');
});
