/* eslint-disable node/no-unsupported-features/es-builtins */
import {Argument, Option, program} from 'commander';
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

export const getCliInput = () => {
  program.addArgument(new Argument('<url>', 'URL to open'));

  program.addOption(
    new Option('-b, --browsers [...browsers]')
      .makeOptionMandatory()
      .argParser(browsers => parseBrowsers(browsers))
  );

  program.parse();

  return {opts: program.opts<Opts>(), args: program.args};
};
