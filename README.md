<!-- living-code-readme:1 -->
<div align="center">

<a href="https://living-code.dev"><img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/brand/favicon.svg" width="64" height="64" alt="Living Code [lc] mark"></a>

# 🛠️ Living Code for Aider

**Calm slate. Living color.**<br>Living Code for Aider: native UI colors and Neovim-aligned code highlighting through a companion Pygments plugin.

<img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/00a692.svg" width="14" height="14" alt="teal #00a692"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/52d7c1.svg" width="14" height="14" alt="mint #52d7c1"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/9ae0dd.svg" width="14" height="14" alt="aqua #9ae0dd"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/80b6d3.svg" width="14" height="14" alt="steel #80b6d3"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/8acb83.svg" width="14" height="14" alt="moss #8acb83"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/f0be6d.svg" width="14" height="14" alt="amber #f0be6d"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/e18c5f.svg" width="14" height="14" alt="copper #e18c5f"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/e96560.svg" width="14" height="14" alt="flare #e96560"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/bf91cd.svg" width="14" height="14" alt="orchid #bf91cd"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/ddaec3.svg" width="14" height="14" alt="rose #ddaec3">

<a href="https://living-code.dev"><img src="https://img.shields.io/badge/Living%20Code-4%20flavors-9ae0dd?style=for-the-badge&amp;labelColor=2d3438&amp;color=9ae0dd&amp;logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjIgMTcgNTguNSAzMCI%2BPGcgZmlsbD0iIzAwYTY5MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNzg3NzA5IDQzLjI2MjU3KSBzY2FsZSgwLjAzMTI4NSAtMC4wMzEyODUpIj48cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBkPSJNMTg1IC0xMTBWODMwSDQ2NVY3MTVIMzEwVjVINDY1Vi0xMTBaIi8%2BPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTIwIDApIiBkPSJNMzg5IDBRMzA3IDAgMjU3LjUgNDlRMjA4IDk4IDIwOCAxNzhWNjE3SDI3VjczMEgzMzNWMTgxUTMzMyAxNTAgMzUwLjUgMTMxLjVRMzY4IDExMyAzOTggMTEzSDU1OVYwWiIvPjxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNDAgMCkiIGQ9Ik0zMDkgLTEwUTIzOCAtMTAgMTg1LjUgMTYuNVExMzMgNDMgMTA0IDkxLjVRNzUgMTQwIDc1IDIwNlYzNDRRNzUgNDEwIDEwNCA0NTguNVExMzMgNTA3IDE4NS41IDUzMy41UTIzOCA1NjAgMzA5IDU2MFE0MTIgNTYwIDQ3NC41IDUwNi41UTUzNyA0NTMgNTQwIDM2MUg0MTdRNDE0IDQwNCAzODQuNSA0MjcuNVEzNTUgNDUxIDMwOSA0NTFRMjU4IDQ1MSAyMjkgNDIzLjVRMjAwIDM5NiAyMDAgMzQ1VjIwNlEyMDAgMTU1IDIyOSAxMjdRMjU4IDk5IDMwOSA5OVEzNTYgOTkgMzg1IDEyMi41UTQxNCAxNDYgNDE3IDE4OUg1NDBRNTM3IDk3IDQ3NC41IDQzLjVRNDEyIC0xMCAzMDkgLTEwWiIvPjxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1NjAgMCkiIGQ9Ik0xMzUgLTExMFY1SDI5MFY3MTVIMTM1VjgzMEg0MTVWLTExMFoiLz48L2c%2BPC9zdmc%2B" alt="Living Code: 4 flavors"></a>
<a href="https://github.com/living-code-theme/aider/stargazers"><img src="https://img.shields.io/github/stars/living-code-theme/aider?style=for-the-badge&amp;labelColor=2d3438&amp;color=f0be6d&amp;logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0iI2YwYmU2ZCIgZD0iTTEyIDJsMy4wOSA2LjI2TDIyIDkuMjdsLTUgNC44NyAxLjE4IDYuODhMMTIgMTcuNzdsLTYuMTggMy4yNUw3IDE0LjE0IDIgOS4yN2w2LjkxLTEuMDF6Ii8%2BPC9zdmc%2B" alt="GitHub stars"></a>
<a href="https://github.com/living-code-theme/aider/issues"><img src="https://img.shields.io/github/issues/living-code-theme/aider?style=for-the-badge&amp;labelColor=2d3438&amp;color=ddaec3&amp;logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGRhZWMzIiBzdHJva2Utd2lkdGg9IjIuNSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiIGZpbGw9IiNkZGFlYzMiLz48L3N2Zz4%3D" alt="Open issues"></a>
<a href="https://github.com/living-code-theme/aider/commits/main"><img src="https://img.shields.io/github/last-commit/living-code-theme/aider?style=for-the-badge&amp;labelColor=2d3438&amp;color=abe2a4&amp;logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggc3Ryb2tlPSIjYWJlMmE0IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMiAxMmg1LjVNMTYuNSAxMkgyMiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjQuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYWJlMmE0IiBzdHJva2Utd2lkdGg9IjIuNSIvPjwvc3ZnPg%3D%3D&amp;label=updated" alt="Last commit"></a>

[Installation](#installation) · [Flavors](#flavors) · [Configuration](#configuration) · [All ports](https://github.com/living-code-theme)

</div>

## Previews

<table data-lc-flavors>
<tr>
<td width="50%" valign="top">
<strong>Night</strong><br><sub>Dark · full palette</sub><br><br>
<a href="images/night.png"><img src="images/night.png" alt="Aider running Living Code Night" width="640"></a>
</td>
<td width="50%" valign="top">
<strong>Frost</strong><br><sub>Dark · softer chroma</sub><br><br>
<a href="images/frost.png"><img src="images/frost.png" alt="Aider running Living Code Frost" width="640"></a>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<strong>Paper</strong><br><sub>Light · near-white slate</sub><br><br>
<a href="images/paper.png"><img src="images/paper.png" alt="Aider running Living Code Paper" width="640"></a>
</td>
<td width="50%" valign="top">
<strong>Signal</strong><br><sub>Dark · teal accent</sub><br><br>
<a href="images/signal.png"><img src="images/signal.png" alt="Aider running Living Code Signal" width="640"></a>
</td>
</tr>
</table>

Select any preview to view the image at full size.

## Installation

```sh
flavor=night # night, frost, paper, or signal
curl -fsSL --create-dirs -o "${XDG_CONFIG_HOME:-$HOME/.config}/aider/themes/living_code_aider-0.1.0-py3-none-any.whl" "https://raw.githubusercontent.com/living-code-theme/aider/main/styles/living_code_aider-0.1.0-py3-none-any.whl"
uv tool inject aider-chat "${XDG_CONFIG_HOME:-$HOME/.config}/aider/themes/living_code_aider-0.1.0-py3-none-any.whl"
curl -fsSL --create-dirs -o "${XDG_CONFIG_HOME:-$HOME/.config}/aider/themes/living-code-$flavor.yml" "https://raw.githubusercontent.com/living-code-theme/aider/main/themes/living-code-$flavor.yml"
aider --config "${XDG_CONFIG_HOME:-$HOME/.config}/aider/themes/living-code-$flavor.yml"
```

The block assumes Aider was installed with `uv tool`. For pipx, replace `uv tool inject aider-chat` with `pipx inject aider-chat`; for a pip/virtualenv installation, use that environment’s `python -m pip install` instead. The plugin must be installed in **Aider’s own Python environment**, not an unrelated Python. It registers all four styles through Pygments’ supported entry-point API and makes no network or model calls.

This uses a separate theme config instead of overwriting `~/.aider.conf.yml`. To keep all your existing Aider settings active together, merge the nine UI color options **and `code-theme`** from the downloaded file into your user or project config. Preserve credentials, model and editing settings.

## Flavors

Expand a flavor for its full-size preview and activation instructions.

<details data-lc-flavor="night">
<summary><strong>Night</strong> · Dark · full palette</summary>

<p><a href="images/night.png"><img src="images/night.png" alt="Aider running Living Code Night" width="1280"></a></p>

```sh
aider --config "${XDG_CONFIG_HOME:-$HOME/.config}/aider/themes/living-code-night.yml"
```

</details>

<details data-lc-flavor="frost">
<summary><strong>Frost</strong> · Dark · softer chroma</summary>

<p><a href="images/frost.png"><img src="images/frost.png" alt="Aider running Living Code Frost" width="1280"></a></p>

```sh
aider --config "${XDG_CONFIG_HOME:-$HOME/.config}/aider/themes/living-code-frost.yml"
```

</details>

<details data-lc-flavor="paper">
<summary><strong>Paper</strong> · Light · near-white slate</summary>

<p><a href="images/paper.png"><img src="images/paper.png" alt="Aider running Living Code Paper" width="1280"></a></p>

```sh
aider --config "${XDG_CONFIG_HOME:-$HOME/.config}/aider/themes/living-code-paper.yml"
```

</details>

<details data-lc-flavor="signal">
<summary><strong>Signal</strong> · Dark · teal accent</summary>

<p><a href="images/signal.png"><img src="images/signal.png" alt="Aider running Living Code Signal" width="1280"></a></p>

```sh
aider --config "${XDG_CONFIG_HOME:-$HOME/.config}/aider/themes/living-code-signal.yml"
```

</details>

## Configuration

Each YAML file sets Aider’s nine documented `*-color` options and selects the corresponding Living Code `code-theme`. Do not combine it with `--dark-mode`, `--light-mode` or an unrelated `--code-theme`, which replace these settings. Completion foreground/background and the selected entry are explicitly paired.

The companion Pygments plugin uses the [Neovim port](https://github.com/living-code-theme/nvim/blob/main/lua/living-code/highlights.lua) as its syntax reference: keywords/builtins → mint, functions → aqua, strings → moss, numbers/literal constants → copper, types → steel, variables → foreground, operators/comments → muted slate, punctuation → subtle slate. Every flavor has its own role mapping, including restrained Signal and light Paper. Lexers still differ in which tokens they recognize; unclassified identifiers remain variables.

## Compatibility

Verified with Aider 0.86.1, Rich and Pygments 2.20.0. The wheel is pure Python, includes all four syntax styles, and uses Pygments’ public plugin API. The terminal owns the full-screen background; use a matching Living Code terminal theme. Tests validate YAML, wheel integrity and Neovim role parity; the native capture checks that Pygments and Rich actually resolve the installed Living Code style rather than silently falling back to Monokai/default.

Previews are captured programmatically from the actual application in an isolated profile. See [`capture/app.py`](capture/app.py) for the app-owned recipe and [`images/capture.json`](images/capture.json) for runtime, palette and image provenance. No mock interface is drawn. A loopback-only canned provider supplies the labeled, repository-owned local code-review demo; Aider renders the response itself. No private session, account, subscription or paid API call is needed.

## Contributing

Found a problem? [Open an issue](https://github.com/living-code-theme/aider/issues/new/choose) with the app version, the flavor and a screenshot. Want Living Code somewhere else? [Request a port](https://github.com/living-code-theme/core/issues/new?template=port-request.yml).

Pull requests are welcome. Keep this README, `port.json` and `images/` in sync, and use real screenshots of the app, never mockups.

<div align="center">

<sub>🦎 <b>One chameleon, many habitats.</b> Part of <a href="https://github.com/living-code-theme">Living Code</a>.</sub>

</div>

## License

<div align="center">

<a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-a1cfe8?style=for-the-badge&amp;labelColor=2d3438&amp;color=a1cfe8&amp;logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYTFjZmU4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI%2BPHBhdGggZD0iTTEyIDN2MThNNyAyMWgxME01IDdoMTRNMTIgM2wtMSA0aDJ6Ii8%2BPHBhdGggZD0iTTUgN2wtMyA3YTMuMiAzLjIgMCAwIDAgNiAwek0xOSA3bC0zIDdhMy4yIDMuMiAwIDAgMCA2IDB6Ii8%2BPC9nPjwvc3ZnPg%3D%3D" alt="MIT license"></a>

<sub>© Elliot Luque</sub>

</div>
