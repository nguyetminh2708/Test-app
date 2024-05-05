export {};
// import { authRequest } from '@/app/api';
// import * as session from '@/features/auth/store';
// import { resetInventoryChecking } from '@/features/inventory/inventorySlice';
// import { IMaterialInventoryCheckingDto } from '@/features/inventory/type';
// import * as loginStore from '@/store/login/store';
// import { rememberSelector } from '@/features/login/store/selectors';
// import { EServicesType } from '@/features/system/configs';
// import { setServiceType } from '@/features/system/store/app';
// import { PERMISSION_KEYS } from '../../authConfigs';
// import * as progressing from '@/features/system/store/progressing';
// import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
// import { getRemainExpireMinutes } from '@/utils/date';
// import moment from 'moment';
// import React, { PropsWithChildren, createContext, useCallback, useContext, useReducer } from 'react';
// import { AUTH_STATE } from '../../authConfigs';
// import { mappingStoreBranchItem } from '../../authUtils';
// import { ILoginInfo, IRememberAccount, IResLoginForm, IRoleResp, IStoreInfo, ParamsLoginForm } from '../../types';
// import {
//   backFromBranch,
//   backFromStartShift,
//   chooseBranch,
//   chooseStore,
//   clearState,
//   setAuthError,
//   setAuthState,
//   setClearAll,
//   setErrorEmptyStoreBranch,
//   successLoginForm,
// } from './actions';
// import { AuthStateContext, authContextReducer, initialAuthStateContext } from './reducer';
// import { HeadlessTask } from 'react-native-headless';
// import { HeadlessTaskKey } from '@/features/system/services/HeadlessTaskCenter';
// interface IAuthContextState {
//   state: AuthStateContext;
//   onLoginForm: (_: ParamsLoginForm) => void;
//   onSelectedStore: (id: string) => void;
//   onSelectedBranch: (id: string) => void;
//   onSendInitialAmount: (amount: number, inventory: IMaterialInventoryCheckingDto[]) => void;
//   onStartApp: () => void;
//   onBackState: () => void;
//   onResetAllState: () => void;
//   onSetError: (error: boolean) => void;
// }

// const AuthContext = createContext<IAuthContextState>({
//   state: initialAuthStateContext,
//   onLoginForm: () => 1,
//   onSelectedStore: () => 1,
//   onSelectedBranch: () => 1,
//   onResetAllState: () => 1,
//   onSendInitialAmount: () => 1,
//   onStartApp: () => 1,
//   onBackState: () => 1,
//   onSetError: () => 1,
// });

// export const AuthProvider = ({ children }: PropsWithChildren) => {
//   const [state, dispatch] = useReducer(authContextReducer, initialAuthStateContext);
//   const { users } = useAppSelector(rememberSelector);

//   const appDispatch = useAppDispatch();
//   /**
//    * @param error
//    * setAuthError
//    */
//   const handleSetError = (error: boolean) => dispatch(setAuthError(error));

//   /**
//    * @param userName
//    * @param password
//    * handle get list stores/branches
//    * at screen login form (step 1)
//    */
//   const handleLoginForm = (params: ParamsLoginForm) => {
//     const { userName, password, isRememberAccount } = params;
//     progressing.setAuthLoading(true);
//     dispatch(setClearAll());
//     appDispatch(resetInventoryChecking());
//     void authRequest
//       .login({ userName, password, branchId: '', loginDateTime: moment(new Date()) })
//       .then(async (response) => {
//         const { stores, isShiftStarted } = response?.data || { stores: undefined, isShiftStarted: false };
//         if (stores) {
//           const resq: IResLoginForm = {
//             isShiftStarted,
//             stores,
//             currentState: AUTH_STATE.CHOOSE_STORE,
//             storeBranches: [],
//             storeId: '',
//           };
//           const storeHasBranch: IStoreInfo[] = stores.filter(
//             (item: IStoreInfo) => item.branches && item.branches.length > 0
//           );

//           if (storeHasBranch.length > 0) {
//             const isAccountContainActivatingStore = await checkIfAccountContainActivatingStore(storeHasBranch);
//             if (!isAccountContainActivatingStore) {
//               session.setIsExpiredPackage(true);
//               progressing.setAuthLoading(false);
//               return;
//             }
//           }

//           if (storeHasBranch.length > 1) {
//             resq.storeBranches = storeHasBranch.map(mappingStoreBranchItem);
//           } else if (storeHasBranch.length === 0) {
//             dispatch(setErrorEmptyStoreBranch(true));
//             return;
//           } else {
//             resq.storeBranches = storeHasBranch[0].branches?.map(mappingStoreBranchItem);
//             resq.currentState = AUTH_STATE.CHOOSE_BRANCH;
//             resq.storeId = storeHasBranch[0].id;
//           }
//           dispatch(successLoginForm(resq, params));
//           const rememberData: IRememberAccount = {
//             isRemember: isRememberAccount === true,
//             users: users,
//             lastLogin: { userName: userName, passWord: isRememberAccount ? password : '' } as ILoginInfo,
//           };
//           if (isRememberAccount) {
//             const checkExist = users.find(
//               (item: any) => item.userName?.toLowerCase() === userName?.toLocaleLowerCase() && item.passWord == password
//             );
//             if (!checkExist) rememberData.users = [...users, { userName: userName, passWord: password } as ILoginInfo];
//           }
//           loginStore.setRememberData(rememberData);
//         } else {
//           dispatch(setAuthError(true));
//         }
//       })
//       .finally(() => {
//         progressing.setAuthLoading(false);
//       });
//   };

//   const checkIfAccountContainActivatingStore = async (storeHasBranch: IStoreInfo[]) => {
//     const storeIds = storeHasBranch.map((store) => {
//       return store.id;
//     });

//     return (await authRequest.checkStoreExpireDate(storeIds.join(',')))?.data?.isContainActivatingStore;
//   };

//   /**
//    * @param id
//    * @param nextState
//    * handle choose store/branch
//    * step 2 or 3 follow list stores)
//    * case stores.length > 1 => is choose store
//    * case stores.length === 1 => is choose branch
//    */
//   const handleSelectedStoreBranch = async (id: string, nextState: AUTH_STATE) => {
//     progressing.setAuthLoading(true);
//     // chooseStore

//     /**
//      * move fn get braches from store to authUtils.ts
//      * ask qc (Phuong) case that is dont have any branches, what the matter with follow login?????
//      */
//     if (nextState === AUTH_STATE.CHOOSE_BRANCH) {
//       dispatch(chooseStore(id));
//       progressing.setAuthLoading(false);
//     } else {
//       // crr state is selected branch
//       if (state.storeId) {
//         void HeadlessTask.send(HeadlessTaskKey.SyncAllProducts, { storeId: state.storeId, branchId: id });
//       }
//       const rs = await authRequest.login({
//         ...state.loginParams,
//         storeId: state.storeId,
//         branchId: id,
//         loginDateTime: moment(),
//         remainExpireMinutes: getRemainExpireMinutes(),
//       });
//       const { isShiftStarted, token, initialAmount = 0, permissions } = rs?.data || {
//         isShiftStarted: false,
//         token: '',
//         initialAmount: 0,
//         permissions: [],
//       };
//       const startShifted = state.isShiftStarted || isShiftStarted;
//       const [
//         isCashier = false,
//         isKitchen = false,
//         isViewReservation = false,
//         isEditReservation = false,
//         isCreateReservation = false,
//         isCancelReservation = false,
//       ] = getPermissions(permissions as IRoleResp[]);
//       if (token) {
//         void HeadlessTask.send(HeadlessTaskKey.SyncSubLogin, { token, storeId: state.storeId, branchId: id });
//         session.setAccessToken(token || '');
//         session.setPermission({
//           isCashier,
//           isKitchen,
//           isViewReservation,
//           isEditReservation,
//           isCreateReservation,
//           isCancelReservation,
//         });
//         const accessKitchenScreen = isKitchen && !isCashier;
//         if (accessKitchenScreen) {
//           dispatch(chooseBranch(id, true));
//           handleNavigateDashboard();
//         } else {
//           if (startShifted) {
//             dispatch(chooseBranch(id, startShifted));
//             handleNavigateDashboard();
//           } else {
//             dispatch(chooseBranch(id, startShifted, initialAmount));
//           }
//         }
//       }
//       progressing.setAuthLoading(false);
//     }
//   };
//   /**
//    * @param amount
//    * send amount to BE at button continue
//    * screen  startShift (step 4)
//    */
//   const handleSendInitialAmount = async (amount: number, inventory: IMaterialInventoryCheckingDto[]) => {
//     progressing.setAuthLoading(true);
//     await authRequest
//       .startShift({
//         branchId: state.branchId,
//         initialAmount: amount,
//         checkInDateTime: moment(),
//         materialInventoryCheckings: inventory,
//         remainExpireMinutes: getRemainExpireMinutes(),
//       })
//       .then(async (response) => {
//         if (response?.data != null || response?.data.length > 0) {
//           session.setAccessToken(response?.data);
//           dispatch(setAuthState(AUTH_STATE.GREAT));
//           appDispatch(resetInventoryChecking());
//         }
//       })
//       .finally(() => {
//         progressing.setAuthLoading(false);
//       });
//   };

//   /**
//    * handle button back on choose branch/store, startShift
//    */
//   const handleOnBackState = () => {
//     progressing.setAuthLoading(true);
//     if (state.currentState === AUTH_STATE.CHOOSE_STORE) {
//       handleClearAll();
//       dispatch(setAuthState(AUTH_STATE.LOGIN_FORM));
//       session.setAccessToken('');
//     }
//     if (state.currentState === AUTH_STATE.CHOOSE_BRANCH) {
//       if (state.stores.length > 1) {
//         dispatch(backFromBranch());
//       } else {
//         handleClearAll();
//         session.setAccessToken('');
//       }
//     }
//     if (state.currentState === AUTH_STATE.START_SHIFT) {
//       appDispatch(resetInventoryChecking());
//       dispatch(backFromStartShift());
//     }
//     progressing.setAuthLoading(false);
//   };
//   /**
//    * handleClearAllState
//    */
//   const handleClearAll = () => dispatch(clearState());
//   const handleNavigateDashboard = () => {
//     session.setVerify(true);
//     setServiceType(EServicesType.inStore);
//   };

//   /**
//    * backgroud fn
//    */
//   const getPermissions = (roles: IRoleResp[] = []) => {
//     let hasRoleKitchen = false;
//     let hasRoleCashier = false;
//     let hasRoleViewReservation = false;
//     let hasRoleEditReservation = false;
//     let hasRoleCreateReservation = false;
//     let hasRoleCancelReservation = false;
//     if (roles.length === 0) return [hasRoleCashier, hasRoleKitchen];
//     const foundRoleKitchen =
//       roles.find((p: IRoleResp) => p.permissionId.toLowerCase() === PERMISSION_KEYS.KITCHEN.toLowerCase()) || undefined;
//     hasRoleKitchen = foundRoleKitchen?.enable || false;
//     const foundRoleCashier =
//       roles.find((p: IRoleResp) => p.permissionId.toLowerCase() === PERMISSION_KEYS.CASHIER.toLowerCase()) || undefined;
//     hasRoleCashier = foundRoleCashier?.enable || false;
//     const foundRoleViewReservation =
//       roles.find((p: IRoleResp) => p.permissionId.toLowerCase() === PERMISSION_KEYS.VIEW_RESERVATION.toLowerCase()) ||
//       undefined;
//     hasRoleViewReservation = foundRoleViewReservation?.enable || false;
//     const foundRoleEditReservation =
//       roles.find((p: IRoleResp) => p.permissionId.toLowerCase() === PERMISSION_KEYS.EDIT_RESERVATION.toLowerCase()) ||
//       undefined;
//     hasRoleEditReservation = foundRoleEditReservation?.enable || false;
//     const foundRoleCreateReservation =
//       roles.find((p: IRoleResp) => p.permissionId.toLowerCase() === PERMISSION_KEYS.CREATE_RESERVATION.toLowerCase()) ||
//       undefined;
//     hasRoleCreateReservation = foundRoleCreateReservation?.enable || false;
//     const foundRoleCancelReservation =
//       roles.find((p: IRoleResp) => p.permissionId.toLowerCase() === PERMISSION_KEYS.CANCEL_RESERVATION.toLowerCase()) ||
//       undefined;
//     hasRoleCancelReservation = foundRoleCancelReservation?.enable || false;
//     return [
//       hasRoleCashier,
//       hasRoleKitchen,
//       hasRoleViewReservation,
//       hasRoleEditReservation,
//       hasRoleCreateReservation,
//       hasRoleCancelReservation,
//     ];
//   };

//   const getValue = useCallback(() => {
//     return {
//       state,
//       onLoginForm: handleLoginForm,
//       onSelectedStore: (_id: string) => handleSelectedStoreBranch(_id, AUTH_STATE.CHOOSE_BRANCH),
//       onSelectedBranch: (_id: string) => handleSelectedStoreBranch(_id, AUTH_STATE.START_SHIFT),
//       onSendInitialAmount: handleSendInitialAmount,
//       onStartApp: handleNavigateDashboard,
//       onBackState: handleOnBackState,
//       onResetAllState: handleClearAll,
//       onSetError: handleSetError,
//     };
//   }, [
//     state,
//     handleLoginForm,
//     handleSendInitialAmount,
//     handleSelectedStoreBranch,
//     handleNavigateDashboard,
//     handleOnBackState,
//     handleClearAll,
//     handleSetError,
//   ]);
//   return <AuthContext.Provider value={getValue()}>{children}</AuthContext.Provider>;
// };
// export const useAuthCtx = () => useContext(AuthContext);
