# esor

[![npm version](https://img.shields.io/npm/v/esor?style=flat&color=black)](https://www.npmjs.com/package/esor)
[![npm downloads/month](https://img.shields.io/npm/dm/esor?style=flat&color=black)](https://www.npmjs.com/package/esor)
[![npm downloads](https://img.shields.io/npm/dt/esor?style=flat&color=black)](https://www.npmjs.com/package/esor)

Utility for easy file downloading: fast, lightweight, cross-platform and flexible.

> Esor means eater in Latin.

## Description

A file download utility written in JavaScript with minimal dependencies. It can be used as a standalone program with command line interface, as well as a library for use in third-party Node.js projects.

## Quick start

### Command-line interface

Install Node.js and run CLI via `npx`:

```
$ npx esor [options] url1 [url2] [url...]
```

### Library

Install package using NPM:

```
$ npm i esor
```

Import into your project:

```js
const { download } = require('esor');

(async () => {
  await download('https://example.com/file.txt', { output: '~/Users/John/Downloads/file.txt' });
})();
```

## Features

- Command-line interface
- HTTP and HTTPS support
- Concurrency
