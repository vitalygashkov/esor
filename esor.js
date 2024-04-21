#!/usr/bin/env node

'use strict';

const { parseOptions } = require('./lib/args');
const { fetchHeaders, setAgentOptions } = require('./lib/http');
const { downloadProgressive } = require('./lib/progressive');
const { downloadSegments } = require('./lib/segments');

const parseOutput = (url, output) => output || url?.split('/').at(-1);

const download = async (url, options = {}) => {
  const headers = await fetchHeaders(url);
  options.output = parseOutput(url, options.output);
  if (headers.isProgressive) {
    await downloadProgressive(url, options, headers.contentLength);
  } else {
    console.error('File is not supported');
  }
};

const options = parseOptions();

setAgentOptions({ retry: options?.retry, proxy: options?.proxy });

const start = async () => {
  for (const url of options.urls) await download(url, options);
};

if (options) start();

module.exports = { download, downloadSegments, setAgentOptions };
