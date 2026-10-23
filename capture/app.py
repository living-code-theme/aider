"""Capture Aider's native code-review UI using a disclosed loopback-only provider."""
import os
import time
import zipfile


def prepare(c):
    c.git_fixture()
    # Extract the actual distributable wheel, including its entry-point metadata.
    # This is a native Pygments plugin, not a renderer patch or capture-only theme.
    plugin = c.home / 'pygments-plugin'
    with zipfile.ZipFile(c.root / 'styles/living_code_aider-0.1.0-py3-none-any.whl') as archive:
        archive.extractall(plugin)
    c.env['PYTHONPATH'] = str(plugin)
    c.run([os.environ['CAPTURE_PYTHON'], c.root / 'scripts/check-syntax.py', c.flavor['id']])
    c.run(['git', 'add', '.'])
    c.run(['git', 'commit', '-m', 'feat: add a default radius and pointer fixture'])
    port_file = c.home / 'provider-port'
    c.spawn(['python3', c.root / 'capture/provider.py', port_file, c.root / 'capture/review.md'])
    for _ in range(100):
        if port_file.exists():
            break
        time.sleep(0.05)
    port = int(port_file.read_text())
    c.env.update(OPENAI_API_KEY='capture-not-a-real-key', OPENAI_API_BASE=f'http://127.0.0.1:{port}/v1',
                 AIDER_ANALYTICS='false', AIDER_CHECK_UPDATE='false')
    return ['aider', '--config', c.root / 'themes' / (c.slug + '.yml'), '--model', 'openai/local-demo',
            '--no-check-update', '--no-show-model-warnings', '--no-check-model-accepts-settings',
            '--no-auto-commits', '--no-analytics', '--no-show-release-notes', '--no-gitignore', '--yes-always',
            '--map-tokens', '0',
            'src/FieldRenderer.ts']


def drive(c):
    c.wait_text(r'src/FieldRenderer.ts\s*\n\s*>')
    c.type('/ask Review the glyph render loop and suggest a safer implementation. (Local demo)')
    c.key('enter')
    c.wait_text(r'add boundary tests next')
    c.wait_text(r'Tokens:')
