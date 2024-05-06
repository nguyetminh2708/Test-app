import { produce } from 'immer';
import * as actionTypes from './actionTypes';
export interface IAuthState {
  accessToken: string;
  isLoading: boolean;
}
export const initialState: IAuthState = {
  accessToken: '',
  isLoading: false,
};

export const reducer = (preState = initialState, action: any) =>
  produce(preState, (draft) => {
    switch (action.type) {
      case actionTypes.SET_START_LOADING: {
        draft.isLoading = action?.isLoading;
        break;
      }
      case actionTypes.LOGOUT: {
        draft.accessToken = '';
        break;
      }

      case actionTypes.SET_ACCESS_TOKEN: {
        draft.accessToken = action?.token || '';
        break;
      }

      default:
        break;
    }
  });
