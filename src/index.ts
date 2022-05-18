#! /usr/bin/env node
import open = require('open');
import {getOpts} from './cli';

const testUrl = 'https://msr.codes';

const {browsers} = getOpts();

for (const browser of browsers) {
  console.log(`Opening in ${browser}`);
  open(testUrl, {app: {name: browser}, wait: false, newInstance: true});
}
