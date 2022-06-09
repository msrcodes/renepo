import {spawn, ChildProcess} from 'node:child_process';
import {promisify} from 'node:util';
import * as open from 'open';
import debug from 'debug';
import {getMacBrowser, isMac} from './browser';
import {randId} from './util';
import type {Browser} from './types';

const d = debug('renrepo:open');

const spawnAsync = promisify(spawn);

const getBrowserArgs = (browser: Browser): string[] => {
  switch (browser) {
    case 'google chrome': {
      return [
        `--user-data-dir=/tmp/${randId()}`,
        '--new-window',
        '--window-size=800,600',
      ];
    }
    default: {
      return [];
    }
  }
};

export const spawnBrowser = (
  url: string,
  browser: Browser
): Promise<ChildProcess> => {
  if (!isMac) {
    return open(url, {
      app: {
        name: browser,
        arguments: getBrowserArgs(browser),
      },
      wait: false,
      newInstance: true,
    });
  }
  return macOpen(url, browser);
};

export const macOpen = async (
  url: string,
  browser: Browser
): Promise<ChildProcess> => {
  d(`spawning ${browser} to ${url}`);
  return spawnAsync(
    'open',
    ['-na', getMacBrowser(browser), '--args', ...getBrowserArgs(browser), url],
    {}
  ) as Promise<ChildProcess>;
};
