/* eslint-disable node/no-unsupported-features/es-builtins */
import {Option, program} from 'commander';
import {getBrowserList, getBrowserMap} from './browser';

interface Opts {
  browsers: string[];
}

const parseBrowsers = (browsers: string) => {
  const browserList = getBrowserList();
  const browserMap = getBrowserMap();
  return browsers
    .split(',')
    .filter(browser => browserList.includes(browser))
    .map(browser => browserMap[browser]);
};

export const getOpts = () => {
  program.addOption(
    new Option('-b,--browsers [...browsers]')
      .makeOptionMandatory()
      .argParser(browsers => parseBrowsers(browsers))
  );

  program.parse();

  return program.opts<Opts>();
};
