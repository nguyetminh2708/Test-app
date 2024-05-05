import * as actionTypes from './actionTypes';

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const setInitAuthenticate = (data: any) => {
  return {
    type: actionTypes.SET_INIT_STATE,
    data,
  };
};

export const setAccessToken = (token: string) => {
  return {
    type: actionTypes.SET_ACCESS_TOKEN,
    token,
  };
};

export const setVerify = (isVerify: boolean) => {
  return {
    type: actionTypes.SET_VERIFY,
    isVerify,
  };
};

export const setRole = (role: string[]) => {
  return {
    type: actionTypes.SET_ROLE,
    role,
  };
};
export const setIsExpiredPackage = (isExpiredPackage: boolean) => {
  return {
    type: actionTypes.SET_IS_EXPIRED_PACKAGE,
    isExpiredPackage,
  };
};
