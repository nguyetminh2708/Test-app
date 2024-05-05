export const parseUrlSearchParams = <T>(search: string): T => {
  const p = new URLSearchParams(search);

  const output: T = {} as T;
  Array.from(p.entries()).forEach(([key, value]) => {
    if (output[key]) {
      const currentValue = typeof output[key] === 'string' ? [output[key]] : output[key];
      output[key] = [...currentValue, value];
    } else {
      output[key] = value;
    }
  });

  return output;
};

export const toUrlSearchParams = <T>(obj: T = {} as T): string => {
  const output = new URLSearchParams();
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((item) => {
        output.append(key, item);
      });
    } else if (obj[key] != null) {
      output.append(key, obj[key]);
    }
  });

  return output.toString();
};

export const getCommandUrl = (cmd: string, queryParams?: any) => {
  let params = { cmd };
  if (queryParams) {
    params = { ...params, ...queryParams };
  }
  return `/ContentHandler.aspx?${toUrlSearchParams(params)}`;
};

export const getUrlParameter = (
  href: string,
  sParam: string,
  ignoreCase?: boolean,
  includeFragment?: boolean
): string => {
  let fragmentSeparator = includeFragment ? '' : '#';
  let pattern = '[?&]' + sParam + '=([^&' + fragmentSeparator + ']*)';
  var regex = ignoreCase ? new RegExp(pattern, 'i') : new RegExp(pattern);
  var results = regex.exec(href);
  if (results == null) {
    return null;
  } else {
    return results[1] || '';
  }
};
