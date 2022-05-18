import {apps} from 'open';
import {platform} from 'os';

export const getBrowsers = (): string[] => {
  const isMac = platform() === 'darwin';

  const browsers = Object.keys(apps);

  if (isMac) {
    browsers.push('safari');
  }

  return browsers;
};
