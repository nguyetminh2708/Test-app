export {};
// import { AUTH_STATE } from '../../authConfigs';
// import { getBranchFromStoreId, mappingStoreBranchItem } from '../../authUtils';
// import { IResLoginForm, IStoreInfo, ParamsLoginForm, StoreBranch } from '../../types';
// import * as actionTypes from './actionTypes';

// export interface AuthStateContext {
//   stores: IStoreInfo[];
//   currentState: AUTH_STATE;
//   isShiftStarted: boolean;
//   storeBranches: StoreBranch[];
//   error: boolean;
//   emptyStoreBranch: boolean;
//   storeId: string;
//   branchId: string;
//   loginParams: ParamsLoginForm;
//   initAmount: number;
//   focusInput: 'username' | 'password';
// }

// export const initialAuthStateContext: AuthStateContext = {
//   currentState: AUTH_STATE.LOGIN_FORM,
//   storeBranches: [],
//   isShiftStarted: false,
//   error: false,
//   emptyStoreBranch: false,
//   stores: [],
//   storeId: '',
//   branchId: '',
//   loginParams: {},
//   initAmount: 0,
//   focusInput: 'username',
// };

// export const authContextReducer = (state = initialAuthStateContext, action: any) => {
//   switch (action.type) {
//     case actionTypes.SET_AUTH_STATE:
//       return { ...state, currentState: action?.newState };
//     case actionTypes.SET_AUTH_ERROR:
//       return { ...state, error: action?.error };
//     case actionTypes.SET_CLEAR_ALL:
//       return { ...state, ...initialAuthStateContext };
//     case actionTypes.SUCCESS_LOGIN_FORM: {
//       const { stores, isShiftStarted, storeId, currentState, storeBranches = [] } = action?.params as IResLoginForm;
//       return {
//         ...state,
//         isShiftStarted,
//         stores,
//         storeId,
//         currentState,
//         storeBranches,
//         loginParams: action?.loginParams || {},
//       };
//     }
//     default:
//       return state;
//   }
// };
