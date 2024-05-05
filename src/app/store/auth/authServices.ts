export {};
// import * as areaListDispatch from '@/features/areaTable/store';
// import * as session from '@/features/auth/store';
// import * as cartDispatch from '@/features/cart/store';
// import * as orderManagementDispatch from '@/features/order/store/order-management/index';
// import {retrieveAsync} from '@/features/system/store/localStorage';
// import Engine from '../sync/realm/Engine';
// import {settingConfigs} from '../sync/syncConfigs';
// import {AUTHENTICATE_KEY} from './authConfigs';
// import {initialState as AuthStateDefaults} from './store/reducer';
// import * as printActions from '@/features/print/store';
// import {getInstalledVersionCode} from 'react-native-autoupdate';
// export const getAuthInfoFromLocalStorage = async (accessToken = '', isCashier = false, isKitchen = false) => {
//   const newAuth = {...AuthStateDefaults};
//   const [appCode = '', currentCode = ''] = await Promise.all([
//     Engine.getSettingByKey(settingConfigs.appCode),
//     getInstalledVersionCode(),
//   ]);

//   if (
//     appCode === '' ||
//     appCode !== `${currentCode}` ||
//     (!isCashier && !isKitchen && accessToken && accessToken !== '')
//   ) {
//     void Engine.addSetting(settingConfigs.appCode, `${currentCode}`);
//     printActions.setPrinters([]);
//     return newAuth;
//   }
// };
// // get accessKey
// export const getTokenLocalStorage = () => {
//   return retrieveAsync(AUTHENTICATE_KEY.ACCESS_TOKEN);
// };
// // remove accessKey

// export const handleActionLogout = () => {
//   areaListDispatch.resetSelectedAreaTable();
//   cartDispatch.clearCart(true);
//   orderManagementDispatch.clearEditOrder();
//   orderManagementDispatch.clearReserveTable();
//   session.logout();
// };
