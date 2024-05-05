import loglevel from 'loglevel';

if (process.env.NODE_ENV === 'development') {
  loglevel.setLevel('info');
}

export const log = loglevel;
export default log;
