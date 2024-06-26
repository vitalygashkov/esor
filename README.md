# esor

[![npm version](https://img.shields.io/npm/v/esor?style=flat&color=black)](https://www.npmjs.com/package/esor)
![GitHub Downloads (all assets, latest release)](https://img.shields.io/github/downloads/vitalygashkov/esor/latest/total?style=flat&color=black)
[![npm downloads](https://img.shields.io/npm/dt/esor?style=flat&color=black)](https://www.npmjs.com/package/esor)

Utility for easy file downloading: fast, lightweight, cross-platform and flexible.

<div align="left">
  <span>English</span> •
  <a href="https://github.com/vitalygashkov/esor/tree/main/docs/README.ru.md">Pусский</a>
</div>

## Description

A file download utility written in JavaScript with minimal dependencies. It can be used as a standalone program with command line interface, as well as a library for use in third-party Node.js projects.

## Quick start

### Command-line interface

Download executable for your platform from [latest release](https://github.com/vitalygashkov/esor/releases/latest) and call it from command line:

```
esor [options] url1 [url2] [url...]
```

Example:

```
esor --output C:\Users\John\Downloads\10Mb.dat https://proof.ovh.net/files/10Mb.dat
```

### Library

Install package using NPM:

```
npm i esor
```

Use in your project:

```js
import { download } from 'esor';

const options = { output: `C:\Users\John\Downloads\10Mb.dat` };
await download('https://proof.ovh.net/files/10Mb.dat', options);
```

## Features

- **Concurrency**: chunk download queue with size limitations
- **Retry** in case of request failure
- **Proxy** support
- **Multiple protocols** support: HTTP, HTTPS
- **Minimal dependencies** and reduced code size
- **Command-line interface**
