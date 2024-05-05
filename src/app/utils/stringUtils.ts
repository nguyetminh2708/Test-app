export const nameAbbreviation = (name: string, maxCharacters = 4) => {
  return name
    ?.split(' ')
    .filter((item) => !!item)
    .map((part) => part[0])
    .slice(0, maxCharacters)
    .filter((ch) => /[a-zA-Z]/g.test(ch))
    .join('');
};

export const serializeQuery = (params: any, prefix?: any) => {
  const query = Object.keys(params).map((key) => {
    const value = params[key];

    if (params.constructor === Array) key = `${prefix}`;
    else if (params.constructor === Object) key = prefix ? `${prefix}[${key}]` : key;

    if (typeof value === 'object') return serializeQuery(value, key);
    else return `${key}=${encodeURIComponent(value)}`;
  });

  return [].concat.apply([], query).join('&');
};

export const toUrlSearchParams = (query: any) => {
  const urlParams = new URLSearchParams(serializeQuery(query));
  return urlParams.toString();
};
