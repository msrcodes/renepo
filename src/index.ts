#! /usr/bin/env node
import open = require('open');
import {getCliInput} from './cli';

const {
  opts: {browsers},
  args,
} = getCliInput();

for (const browser of browsers) {
  const [url] = args;
  open(url, {
    app: {
      name: browser,
    },
    wait: false,
    newInstance: true,
  });
}
