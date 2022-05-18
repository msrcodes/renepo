# 👾 Renepo
![✨ Release](https://github.com/msrcodes/renepo/actions/workflows/RELEASE.yml/badge.svg)

Renepo allows you to open a URL in multiple browsers at the same time using the command line. Super helpful for during web development when you need to open a site in multiple browsers for testing.

## ⚙️ Installation

It is recommended that you install this package globally, and use it as a CLI tool.

### npm
```
npm i -g renepo
```

### yarn
```
yarn global add renepo
```

## 🔨 Usage

```
Usage: renepo [options] <url>

Arguments:
  url                           URL to open

Options:
  -b, --browsers [...browsers]
  -h, --help                    display help for command
```

### Example

```
renepo https://localhost:3000 -b chrome,safari
```

## ⚠️ Issues? Feature requests?

Report these [on GitHub](https://github.com/msrcodes/renepo/issues).

