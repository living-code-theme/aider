// Aider's documented UI color flags, in native YAML config form. Syntax theme is intentionally not overridden.
const roles = {
  'user-input-color': 'accent', 'tool-output-color': 'fgMuted', 'tool-error-color': 'error',
  'tool-warning-color': 'warning', 'assistant-output-color': 'fg', 'completion-menu-color': 'fg',
  'completion-menu-bg-color': 'bgAlt', 'completion-menu-current-color': 'fg', 'completion-menu-current-bg-color': 'selection',
};
export function generate(flavors) {
  return flavors.map(f => ({ path: `themes/${f.slug}.yml`, content:
    '# Merge these color settings into .aider.conf.yml, or use aider --config <this-file>.\n' +
    Object.entries(roles).map(([key, role]) => `${key}: "${f.r(role)}"`).join('\n') + '\n',
  }));
}
