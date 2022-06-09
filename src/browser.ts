/* eslint-disable node/no-unsupported-features/es-builtins */
import {apps} from 'open';
import {platform} from 'os';

import type {Browser} from './types';

export const isMac = platform() === 'darwin';

export const getBrowserMap = () => {
  const entries = Object.entries(apps);

  if (isMac) {
    entries.push(['safari', 'safari']);
  }

  return Object.fromEntries(entries);
};

export const getBrowserList = (): string[] => {
  const browsers = Object.keys(apps);

  if (isMac) {
    browsers.push('safari');
  }

  return browsers;
};

export const getMacBrowser = (browser: Browser) => {
  const browserLookup: Partial<Record<Browser, string>> = {
    'google chrome': 'Google Chrome',
  };
  return browserLookup[browser] ?? browser;
};
