import store from '../../app/';
import * as sessionActions from './actions';
import { initialState } from './reducer';

export const setAccessToken = (accessToken: string) => {
  store.dispatch(sessionActions.setAccessToken(accessToken));
};

export const logout = () => {
  store.dispatch(sessionActions.logout());
};

export const setVerify = (isVerify: boolean) => {
  store.dispatch(sessionActions.setVerify(isVerify));
};

export const setInitAuthenticate = (data?: any) => {
  store.dispatch(sessionActions.setInitAuthenticate(data ?? initialState));
};
export const setPermission = (role: string[]) => {
  store.dispatch(sessionActions.setRole(role));
};

export const setIsExpiredPackage = (isExpiredPackage: boolean) => {
  store.dispatch(sessionActions.setIsExpiredPackage(isExpiredPackage));
};
