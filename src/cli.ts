import {Option, program} from 'commander';
import {getBrowsers} from './browser';

interface Opts {
  browsers: string[];
}

export const getOpts = () => {
  const browserList = getBrowsers();

  program.addOption(
    new Option('-b,--browsers [...browsers]')
      .makeOptionMandatory()
      .argParser(browsers =>
        browsers.split(',').filter(browser => browserList.includes(browser))
      )
  );

  program.parse();

  return program.opts<Opts>();
};
