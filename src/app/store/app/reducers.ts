import * as areaListReducer from '@/features/areaTable/store/reducer';
import * as authReducer from '@/features/auth/store/reducer';
import * as loginReducer from '@/features/login/store/reducer';
import * as cartReducer from '@/features/cart/store/reducer';
import * as feeReducer from '@/features/fee/store/reducer';
import * as kitchenReducer from '@/features/kitchen/store/reducer';
import * as notificationReducer from '@/features/notification/store/reducer';
import * as orderManagementReducer from '@/features/order/store/order-management/reducer';
import * as printReducer from '@/features/print/store/reducer';
import * as comboDetailReducer from '@/features/product/store/combo-detail/reducer';
import * as productDetailReducer from '@/features/product/store/product-detail/reducer';
import * as productListReducer from '@/features/product/store/product-list/reducer';
import * as reserveTableList from '@/features/reserve-table/store/reducer';
import * as systemReducer from '@/features/system/store/app/reducer';
import * as progressingReducer from '@/features/system/store/progressing/reducer';
import * as productManagementReducer from '@/features/product/store/product-management/reducer';
import * as rootAppReducer from '@/features/system/store/root/reducer';
import inventoryReducer from '@/features/inventory/inventorySlice';
import orderReducer from '@/features/order/orderSlice';

import {combineReducers, Reducer} from 'redux';
import {FluxStandardAction} from 'redux-promise-middleware';

const appReducer = combineReducers({
  root: rootAppReducer.reducer,
  app: systemReducer.reducer,
  auth: authReducer.reducer,
  login: loginReducer.reducer,
  progressing: progressingReducer.reducer,
  productList: productListReducer.reducer,
  productManagement: productManagementReducer.reducer,
  comboDetail: comboDetailReducer.reducer,
  productDetail: productDetailReducer.reducer,
  cart: cartReducer.reducer,
  areaList: areaListReducer.reducer,
  orderManagement: orderManagementReducer.reducer,
  print: printReducer.reducer,
  fees: feeReducer.reducer,
  kitchen: kitchenReducer.reducer,
  notificationList: notificationReducer.reducer,
  reserveTableList: reserveTableList.reducer,
  inventory: inventoryReducer,
  order: orderReducer,
});

export const rootReducer: Reducer = (state: any, action: FluxStandardAction) => {
  return appReducer(state, action);
};
