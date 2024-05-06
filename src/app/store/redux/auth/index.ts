import store from '..';
import * as sessionActions from './actions';

export const setAccessToken = (accessToken: string) => {
  store.dispatch(sessionActions.setAccessToken(accessToken));
};

export const logout = () => {
  store.dispatch(sessionActions.logout());
};
