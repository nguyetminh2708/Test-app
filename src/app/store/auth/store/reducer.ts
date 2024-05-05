import { getUserInfo } from '@/features/auth/authUtils';
import { IUserInfo, IUserRole } from '@/features/auth/types';
import { produce } from 'immer';
import * as actionTypes from './actionTypes';
export interface IAuthState {
  accessToken: string;
  user?: IUserInfo;
  isVerify: boolean;
  isLoading: boolean;
  role: IUserRole & { checked: boolean };
  isExpiredPackage: boolean;
}
export const initialState: IAuthState = {
  accessToken: '',
  user: undefined,
  isVerify: false,
  isLoading: false,
  role: [],
  isExpiredPackage: false,
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
        draft.isVerify = false;
        draft.user = undefined;
        draft.role = [];
        break;
      }

      case actionTypes.SET_ACCESS_TOKEN: {
        const userInfo = getUserInfo(action?.token || '');
        draft.accessToken = action?.token || '';
        draft.user = userInfo;
        break;
      }
      case actionTypes.SET_VERIFY: {
        const { isVerify = false } = action;
        draft.isVerify = isVerify;
        break;
      }
      case actionTypes.SET_INIT_STATE: {
        const {
          user = undefined,
          accessToken = '',
          isVerify = false,
          role = {
            isKitchen: false,
            isCashier: false,
            checked: false,
            isViewReservation: false,
            isEditReservation: false,
            isCreateReservation: false,
            isCancelReservation: false,
          },
        } = action?.data || {
          addressMetaData: undefined,
          user: undefined,
          accessToken: '',
          isVerify: false,
          role: {
            isKitchen: false,
            isCashier: false,
            checked: false,
            isViewReservation: false,
            isEditReservation: false,
            isCreateReservation: false,
            isCancelReservation: false,
          },
        };
        draft.accessToken = accessToken;
        draft.isVerify = isVerify;
        draft.user = user;
        draft.role = role;
        break;
      }
      case actionTypes.SET_ROLE: {
        const { role }: { role: IUserRole } = action || {
          role: {
            isKitchen: false,
            isCashier: false,
            isViewReservation: false,
            isEditReservation: false,
            isCreateReservation: false,
            isCancelReservation: false,
          },
        };
        draft.role = { ...role, checked: true };
        break;
      }
      case actionTypes.SET_IS_EXPIRED_PACKAGE: {
        const { isExpiredPackage } = action;
        draft.isExpiredPackage = isExpiredPackage;
        break;
      }
      default:
        break;
    }
  });
