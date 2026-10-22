"""Capture Aider's native help and prompt colors; no paid model is contacted."""


def prepare(c):
    c.git_fixture()
    c.run(['git', 'add', '.'])
    c.run(['git', 'commit', '-m', 'feat: add a default radius and pointer fixture'])
    c.env.update(OPENAI_API_KEY='capture-not-a-real-key', OPENAI_API_BASE='http://127.0.0.1:9/v1',
                 AIDER_ANALYTICS='false', AIDER_CHECK_UPDATE='false')
    return ['aider', '--config', c.root / 'themes' / (c.slug + '.yml'), '--model', 'openai/fixture',
            '--no-check-update', '--no-show-model-warnings', '--no-check-model-accepts-settings',
            '--no-auto-commits', '--no-analytics', '--no-show-release-notes', '--no-gitignore', '--yes-always', 'src/FieldRenderer.ts']


def drive(c):
    c.wait_text(r'src/FieldRenderer.ts\s*\n\s*>')
    c.type('/diff')
    c.key('enter')
    c.wait_text(r'DEFAULT_RADIUS')
    c.type('/')  # Native slash-command completion; no model prompt is sent.
