#! /usr/bin/env node
import {getCliInput} from './cli';
import {parseUrl} from './url';
import {spawnBrowser} from './open';
import debug from 'debug';
import type {Browser} from './types';

const d = debug('renrepo:index');

async function main() {
  const {
    opts: {browsers},
    args,
  } = getCliInput();
  d(`Got [${browsers.join(', ')}] browsers`);
  for (const browser of browsers) {
    const url = parseUrl(args[0]);
    await spawnBrowser(url, browser as Browser);
  }
}

main();
