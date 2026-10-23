#!/usr/bin/env python3
"""Verify native Pygments entry-point loading and Rich's actual Aider syntax theme."""
import json
from pathlib import Path
import sys
from pygments.styles import get_style_by_name
from pygments.token import Token
from pygments.lexers import get_lexer_by_name
from rich.syntax import Syntax

ROOT = Path(__file__).resolve().parents[1]
REFERENCE = json.loads((ROOT / 'test/fixtures/neovim-syntax.json').read_text())['flavors']
ROLES = {
    'Keyword': 'keyword', 'Name.Builtin': 'builtin', 'Name.Function': 'function',
    'Name': 'variable', 'Name.Constant': 'variable', 'Name.Attribute': 'property',
    'Name.Class': 'type', 'Name.Namespace': 'namespace', 'Literal.String': 'string',
    'Literal.Number': 'number', 'Keyword.Constant': 'constant', 'Operator': 'operator',
    'Punctuation': 'punctuation', 'Comment': 'comment',
}


def token(name):
    value = Token
    for part in name.split('.'):
        value = getattr(value, part)
    return value


def check(flavor):
    slug = 'living-code-' + flavor
    style = get_style_by_name(slug)
    assert style.__module__ == 'living_code_aider', f'{slug} resolved to an unrelated style'
    theme = Syntax.get_theme(slug)
    for name, role in ROLES.items():
        expected = REFERENCE[flavor][role]
        assert '#' + style.style_for_token(token(name))['color'] == expected, (slug, name, role)
        assert theme.get_style_for_token(token(name)).color.get_truecolor().hex == expected, (slug, name, 'Rich')
    assert style.style_for_token(Token.Comment)['italic']
    # Exercise the actual lexer/theme pipeline, not only the generated lookup table.
    code = 'const count = Math.min(cells.length, 4096); // Bound the loop\n'
    tokens = list(get_lexer_by_name('typescript').get_tokens(code))
    for literal, role in [('const', 'keyword'), ('4096', 'number'), ('// Bound the loop', 'comment')]:
        kind = next(kind for kind, value in tokens if value.strip() == literal)
        actual = theme.get_style_for_token(kind).color.get_truecolor().hex
        assert actual == REFERENCE[flavor][role], (slug, literal, kind, actual)
    print(slug + ': native Pygments + Rich syntax roles match Neovim')


if __name__ == '__main__':
    for flavor in sys.argv[1:] or REFERENCE:
        check(flavor)
