<!-- living-code-readme:1 -->
# 🛠️ Living Code for Aider

**Calm slate. Living color.** Living Code for Aider: native YAML colors for user and assistant messages, warnings, errors and completion-menu states.

[Installation](#installation) · [Flavors](#flavors) · [Configuration](#configuration) · [All ports](https://github.com/living-code-theme)

## Previews

Real application screenshots have not been captured yet.

## Installation

```sh
git clone https://github.com/living-code-theme/aider.git
cd aider
```

Try one flavor from this clone:

```sh
aider --config "$PWD/themes/living-code-night.yml"
```

For everyday use, merge the nine color settings from the selected file into your existing `~/.aider.conf.yml` or project `.aider.conf.yml`. Keep model, credentials and editing settings unchanged.

## Flavors

Expand a flavor for its full-size preview and activation instructions.

<details data-lc-flavor="night">
<summary><strong>Night</strong> · Dark · full palette</summary>

A real application capture is not available yet.

```sh
aider --config "$PWD/themes/living-code-night.yml"
```

</details>

<details data-lc-flavor="frost">
<summary><strong>Frost</strong> · Dark · softer chroma</summary>

A real application capture is not available yet.

```sh
aider --config "$PWD/themes/living-code-frost.yml"
```

</details>

<details data-lc-flavor="paper">
<summary><strong>Paper</strong> · Light · near-white slate</summary>

A real application capture is not available yet.

```sh
aider --config "$PWD/themes/living-code-paper.yml"
```

</details>

<details data-lc-flavor="signal">
<summary><strong>Signal</strong> · Dark · teal accent</summary>

A real application capture is not available yet.

```sh
aider --config "$PWD/themes/living-code-signal.yml"
```

</details>

## Configuration

The files map exactly Aider’s nine documented `*-color` options. Do not combine them with `--dark-mode` or `--light-mode`, which replace these colors with Aider presets. This port intentionally leaves `code-theme` alone so it does not replace your syntax theme with an unrelated preset. Completion foreground/background and the selected entry are explicitly paired.

## Compatibility

For Aider versions exposing the nine color flags listed in `test/fixtures/upstream.json`. This is a UI-color port, not a custom Pygments style. Aider’s rendered code blocks continue to use your configured `code-theme`; the terminal owns the full-screen background. Use a matching Living Code terminal theme for the rest of the palette. Tests parse native YAML and verify accepted flag names and semantic colors.

## Contributing

Found a problem? [Open an issue](https://github.com/living-code-theme/aider/issues/new/choose) with the app version, the flavor and a screenshot. Want Living Code somewhere else? [Request a port](https://github.com/living-code-theme/core/issues/new?template=port-request.yml).

Pull requests are welcome. Keep this README, `port.json` and `images/` in sync, and use real screenshots of the app, never mockups.

🦎 **One chameleon, many habitats.** Part of [Living Code](https://github.com/living-code-theme).

## License

[MIT](LICENSE) © Elliot Luque
