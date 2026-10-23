// Aider UI colors plus a real Pygments plugin, using the same roles as Living Code Neovim.
const roles = {
  'user-input-color': 'accent', 'tool-output-color': 'fgMuted', 'tool-error-color': 'error',
  'tool-warning-color': 'warning', 'assistant-output-color': 'fg', 'completion-menu-color': 'fg',
  'completion-menu-bg-color': 'bgAlt', 'completion-menu-current-color': 'fg', 'completion-menu-current-bg-color': 'selection',
};
export const syntaxRoles = {
  Token: 'variable', Text: 'variable', Whitespace: 'variable', Error: 'error',
  Comment: 'comment', 'Comment.Preproc': 'decorator', 'Comment.Special': 'comment',
  Keyword: 'keyword', 'Keyword.Type': 'type', 'Keyword.Constant': 'constant',
  Operator: 'operator', 'Operator.Word': 'keyword', Punctuation: 'punctuation',
  Name: 'variable', 'Name.Function': 'function', 'Name.Function.Magic': 'function',
  'Name.Class': 'type', 'Name.Exception': 'type', 'Name.Namespace': 'namespace',
  'Name.Builtin': 'builtin', 'Name.Builtin.Pseudo': 'builtin', 'Name.Decorator': 'decorator',
  'Name.Attribute': 'attribute', 'Name.Property': 'property', 'Name.Tag': 'tag',
  'Name.Variable': 'variable', 'Name.Variable.Instance': 'property', 'Name.Variable.Magic': 'builtin',
  'Name.Constant': 'variable', 'Name.Label': 'decorator',
  Literal: 'constant', Number: 'number', String: 'string', 'String.Doc': 'comment',
  'String.Escape': 'escape', 'String.Regex': 'regex', 'String.Interpol': 'punctuation',
  'Generic.Heading': 'heading', 'Generic.Subheading': 'heading',
  'Generic.Inserted': 'added', 'Generic.Deleted': 'removed', 'Generic.Error': 'error',
};
const className = f => f.id[0].toUpperCase() + f.id.slice(1) + 'Style';
const distribution = 'styles/living_code_aider-0.1.0.dist-info';
export function generate(flavors) {
  const yaml = flavors.map(f => ({ path: `themes/${f.slug}.yml`, content:
    '# Aider UI colors and the companion Living Code Pygments syntax style.\n' +
    `code-theme: "${f.slug}"\n` +
    Object.entries(roles).map(([key, role]) => `${key}: "${f.r(role)}"`).join('\n') + '\n',
  }));
  const classes = flavors.map(f => `class ${className(f)}(Style):
    name = "${f.name}"
    background_color = "${f.r('bg')}"
    highlight_color = "${f.r('selection')}"
    styles = {
${Object.entries(syntaxRoles).map(([token, role]) => `        ${token}: "noinherit ${f.styles[role] ?? ''} ${f.r(role)}",`).join('\n')}
        Generic.Emph: "italic",
        Generic.Strong: "bold",
    }
`).join('\n\n');
  return [...yaml,
    { path: 'styles/living_code_aider.py', content: '# Generated from the pinned Living Code palette. Do not edit.\n' +
      'from pygments.style import Style\n' +
      'from pygments.token import Token, Text, Whitespace, Error, Comment, Keyword, Operator, Punctuation, Name, Literal, Number, String, Generic\n\n\n' + classes },
    { path: `${distribution}/METADATA`, content: 'Metadata-Version: 2.1\nName: living-code-aider\nVersion: 0.1.0\nSummary: Living Code Pygments styles for Aider\nLicense: MIT\nRequires-Python: >=3.10\nRequires-Dist: Pygments>=2.18\n\nLiving Code syntax styles for Aider, aligned with the Neovim port.\n' },
    { path: `${distribution}/WHEEL`, content: 'Wheel-Version: 1.0\nGenerator: living-code-aider\nRoot-Is-Purelib: true\nTag: py3-none-any\n' },
    { path: `${distribution}/entry_points.txt`, content: '[pygments.styles]\n' +
      flavors.map(f => `${f.slug} = living_code_aider:${className(f)}`).join('\n') + '\n' },
  ];
}
