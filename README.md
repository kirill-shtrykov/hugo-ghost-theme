# Hugo Ghost theme
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Hugo Ghost is [Hugo](https://gohugo.io) theme based on [Casper](https://github.com/TryGhost/Casper), default
[Ghost](https://ghost.org/) theme

![Ghost Screenshot](https://raw.githubusercontent.com/kirill-shtrykov/hugo-ghost-theme/master/images/screenshot.png)

## Installation

Inside the folder of your Hugo site run:

    $ git submodule add https://github.com/kirill-shtrykov/hugo-ghost-theme themes/ghost

For more information read the official [setup guide](https://gohugo.io/overview/installing/) of Hugo.

## Configuration
Configuration example
```yaml
baseURL: https://example.com
languageCode: ru-RU
defaultContentLanguage: ru
title: Example Site
theme: ghost

params:
  author: Author Name
  description: Site Description
  logo: logo.svg
  mainSections:
    - posts
  favicon:
    enabled: true
    file: favicon.ico
  svgIcon:
    enabled: true
    file: icon.svg
  appleIcon:
    enabled: true
    file: apple-touch-icon.png
  webmanifest:
    enabled: true
    file: manifest.webmanifest
  social:
    email: email@example.com
    telegram: username
    gitlab: username
    github: username

menus:
  main:
    - identifier: Home
      weight: 100
      url: /
    - identifier: Tags
      url: /tags/

```

## Features
- `warn`/`hint`/`danger` codeblocks

## Contributing
If you find a bug or have an idea for a feature, feel free to write an 
[issue](https://github.com/kirill-shtrykov/hugo-ghost-theme/issues) or make a PR.

## TODO
- Pagination
- Comments
- More socials
- More languages

## License
Hugo Ghost is licensed under the [MIT license](https://github.com/kirill-shtrykov/hugo-ghost-theme/blob/master/LICENSE).

## Acknowledgements
- [hugo-theme-anubis](https://github.com/mitrichius/hugo-theme-anubis)
