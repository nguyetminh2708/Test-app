interface JsonRequestInit extends RequestInit {
  body?: any;
  type?: 'json' | 'blob' | 'text';
}

const getFileNameFromHeader = (contentDisposition: string) => {
  let fileName: string = contentDisposition.split('filename=')[1].split(';')[0];
  fileName = fileName.replace(/['"]/g, '');
  return fileName;
};

export const fetchAsync = async (url: string, options: JsonRequestInit = {}) => {
  const type = options.type || 'json';

  if (type === 'json') {
    options.body = JSON.stringify(options.body);
    options.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...options.headers,
    };
  }

  const accessToken = localStorage.getItem('access_token');
  if (accessToken) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }

  const response = await fetch(url, {
    ...options,
  });
  const contentType = response.headers.get('Content-Type') || '';
  let result: any;

  try {
    if (/application\/json/.test(contentType)) {
      result = await response.json();
    } else if (response.headers.has('Content-Disposition')) {
      result = {
        blob: await response.blob(),
        fileName: getFileNameFromHeader(response.headers.get('Content-Disposition')),
      };
    } else {
      result = await response.text();
    }
  } catch (err) {
    console.error('Invalid data type');
  }

  if (response.ok) {
    return result;
  } else {
    throw { status: response.status, headers: response.headers, data: result };
  }
};
