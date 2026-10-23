import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { resolveAll } from '../scripts/palette.mjs';
import { syntaxRoles } from '../src/generate.mjs';
const root = new URL('../', import.meta.url);
const reference = JSON.parse(await readFile(new URL('test/fixtures/neovim-syntax.json', root)));

for (const f of resolveAll()) test(`${f.name}: syntax roles agree with the pinned Neovim reference`, () => {
  for (const [role, color] of Object.entries(reference.flavors[f.id])) assert.equal(f.r(role), color, role);
  assert.equal(syntaxRoles['Name.Constant'], 'variable', 'constant identifiers are variables, not literal values');
  assert.equal(syntaxRoles['Keyword.Constant'], 'constant');
  assert.equal(syntaxRoles['Name.Builtin'], 'builtin');
  assert.equal(syntaxRoles.Punctuation, 'punctuation');
});

test('the distributable Pygments wheel is reproducible and matches the generated plugin sources', () => {
  execFileSync('python3', ['scripts/build-wheel.py', '--check'], { cwd: root });
  execFileSync('python3', ['-c', `
import base64, csv, hashlib, io, zipfile
from pathlib import Path
with zipfile.ZipFile('styles/living_code_aider-0.1.0-py3-none-any.whl') as archive:
    record = archive.read('living_code_aider-0.1.0.dist-info/RECORD').decode()
    entries = list(csv.reader(io.StringIO(record)))
    assert {row[0] for row in entries} == set(archive.namelist())
    for name, digest, length in entries:
        if name.endswith('/RECORD'):
            continue
        data = archive.read(name)
        assert int(length) == len(data)
        assert digest == 'sha256=' + base64.urlsafe_b64encode(hashlib.sha256(data).digest()).rstrip(b'=').decode()
        if not name.endswith('/LICENSE'):
            assert data == (Path('styles') / name).read_bytes()
    for info in archive.infolist():
        assert info.date_time == (1980, 1, 1, 0, 0, 0)
`], { cwd: root });
});
