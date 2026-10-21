import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { resolveAll } from '../scripts/palette.mjs';
import { keys, hexColors, assertContrast } from './helpers.mjs';
const fixture = JSON.parse(await readFile(new URL('./fixtures/upstream.json', import.meta.url)));
const read = path => readFile(new URL('../' + path, import.meta.url), 'utf8');
import YAML from 'yaml';

for (const f of resolveAll()) test(f.name + ': native YAML uses exactly Aider color flags', async () => {
  const t = YAML.parse(await read('themes/' + f.slug + '.yml'));
  keys(t, fixture.colors); hexColors(t);
  assert.ok(!('code-theme' in t) && !('dark-mode' in t) && !('light-mode' in t));
  assert.equal(t['user-input-color'], f.r('accent')); assert.equal(t['assistant-output-color'], f.r('fg'));
  assert.equal(t['tool-error-color'], f.r('error')); assert.equal(t['tool-warning-color'], f.r('warning'));
  assertContrast(t['completion-menu-color'], t['completion-menu-bg-color']);
  assertContrast(t['completion-menu-current-color'], t['completion-menu-current-bg-color']);
});
