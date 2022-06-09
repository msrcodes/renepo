export const parseUrl = (url: string): string => {
  if (/http(s?):\/\//.test(url)) {
    return url;
  }
  return 'http://' + url;
};
