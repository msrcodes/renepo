/* eslint-disable node/no-unsupported-features/es-builtins */
import {apps} from 'open';
import {platform} from 'os';

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
