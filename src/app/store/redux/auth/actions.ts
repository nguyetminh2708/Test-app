import * as actionTypes from './actionTypes';

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const setAccessToken = (token: string) => {
  return {
    type: actionTypes.SET_ACCESS_TOKEN,
    token,
  };
};
