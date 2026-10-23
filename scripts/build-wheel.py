#!/usr/bin/env python3
"""Build/check the deterministic, dependency-free Living Code Pygments plugin wheel."""
import argparse
import base64
import csv
import hashlib
import io
from pathlib import Path
import tempfile
import os
import zipfile

ROOT = Path(__file__).resolve().parents[1]
DIST = 'living_code_aider-0.1.0.dist-info'
WHEEL = ROOT / 'styles/living_code_aider-0.1.0-py3-none-any.whl'


def wheel_bytes():
    members = {name: (ROOT / 'styles' / name).read_bytes() for name in (
        'living_code_aider.py', f'{DIST}/METADATA', f'{DIST}/WHEEL', f'{DIST}/entry_points.txt')}
    members[f'{DIST}/licenses/LICENSE'] = (ROOT / 'LICENSE').read_bytes()
    record = io.StringIO(newline='')
    writer = csv.writer(record, lineterminator='\n')
    for name, content in sorted(members.items()):
        digest = base64.urlsafe_b64encode(hashlib.sha256(content).digest()).rstrip(b'=').decode()
        writer.writerow((name, 'sha256=' + digest, len(content)))
    writer.writerow((f'{DIST}/RECORD', '', ''))
    members[f'{DIST}/RECORD'] = record.getvalue().encode()
    output = io.BytesIO()
    with zipfile.ZipFile(output, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for name, content in sorted(members.items()):
            info = zipfile.ZipInfo(name, date_time=(1980, 1, 1, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o644 << 16
            info.create_system = 3
            archive.writestr(info, content)
    return output.getvalue()


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    expected = wheel_bytes()
    if args.check:
        if not WHEEL.is_file() or WHEEL.read_bytes() != expected:
            raise SystemExit('Stale Pygments wheel. Run pnpm build.')
        print('Living Code Pygments wheel is current.')
    else:
        with tempfile.NamedTemporaryFile(dir=WHEEL.parent, delete=False) as pending:
            try:
                pending.write(expected)
                pending.flush()
                os.fchmod(pending.fileno(), 0o644)
                os.replace(pending.name, WHEEL)
            finally:
                Path(pending.name).unlink(missing_ok=True)
        print(WHEEL.relative_to(ROOT))
