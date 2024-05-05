import { Moment } from 'moment';
import { EnumDeliveryMethod } from '../shift/types';
import { AUTH_STATE } from './authConfigs';
export interface IUserInfoLogin extends IUserInfoWithBranch {
  userName: string;
  password: string;
  loginDateTime?: Moment;
  isRememberAccount?: boolean;
}
export interface IUserInfoWithBranch {
  storeId?: string;
  branchId: string;
  remainExpireMinutes?: number;
}

export interface IUserInfoStartShift extends IUserInfoWithBranch {
  initialAmount: number;
  checkInDateTime: Moment;
  materialInventoryCheckings: [];
}

export interface IStoreBranchLogin {
  id: string;
  name: string;
  thumbnail: string;
  address: string;
}

export interface IStoreInfo extends IStoreBranchLogin {
  branches?: IStoreBranchLogin[];
}

export interface IStoreBranchInfo {
  storeId: string;
  storeName: string;
  currencyCode: string;
  branchId: string;
  branchName: string;
  address: string;
  thumbnail: string;
}

export interface IUserInfo {
  userId: string;
  accountId: string;
  shiftId: string;
  fullName: string;
  emailAddress: string;
  accountType: string;
  currencyCode: string;
  currencySymbol: string;
  storeId: string;
  storeName: string;
  branchId: string;
  branchName: string;
  address: string;
  thumbnail: string;
  isStartShift: boolean;
  similarName: string;
  staffThumbnail: string;
}
export interface IStampConfig {
  isShowLogo: boolean;
  isShowNote: boolean;
  isShowNumberOfItem: boolean;
  isShowTime: boolean;
  stampType: number;
}

export interface IBillConfigData {
  isShowOption: boolean;
  isShowTopping: boolean;
  isShowItemPrices?: boolean;
  billFrameSizeKey: string;
}

export interface IWorkspaceStoreInfo {
  id: string;
  storeName: string;
  logo: string;
  branchId: string;
  branchName: string;
  branchAddress: string;
  currencySymbol: string;
  phoneCode: string;
  countryIso: string;
  countryName: string;
  branchLocation: {
    lat: number;
    lng: number;
  };
  branchHotline: string;
};
export interface IWorkspace {
  storeInfo: IWorkspaceStoreInfo;
  storeConfig: IStoreConfig;
  billTemplates: any;
  orderSlipTemplates: any;
  stampTemplates: any;
  stampConfigData: IStampConfig;
  billConfigData?: IBillConfigData[];
  orderSlipConfigData?: IBillConfigData[];
  barcodeTemplates: any;
}
export interface IDeliveryMethod {
  id: string;
  enumId: EnumDeliveryMethod;
  name: string;
}

//#region Address types
interface IBaseAddress {
  id: string;
  name: string;
  code?: string;
}
export interface ICountry extends IBaseAddress {
  iso: string;
  nicename: string;
  numcode: string;
  phonecode: string;
  currencycode: string;
}
export interface IState extends IBaseAddress {
  countryCode: string;
  name: string;
}
export interface ICity extends IBaseAddress {
  countryId: string;
}
export interface IDistrict extends IBaseAddress {
  cityId: string;
  prefix: string;
}
export interface IWard extends IBaseAddress {
  districtId: string;
  prefix: string;
}
export interface IAddressMetaData {
  countries: ICountry[];
  states: IState[];
  cities: ICity[];
  districts: IDistrict[];
  wards: IWard[];
  defaultCountryStore: ICountry;
}
//#endregion Address types

export interface ParamsLoginForm {
  userName?: string;
  password?: string;
  isRememberAccount?: boolean;
}
export interface StoreBranch {
  id: string;
  name: string;
  thumbnail?: string;
  address?: string;
}
export interface IResLoginForm {
  isShiftStarted: boolean;
  stores: IStoreInfo[];
  storeId: string;
  currentState: AUTH_STATE;
  storeBranches?: StoreBranch[];
}

export interface IStoreConfig {
  id: string;
  defaultStampType: string;
  isStoreHasKitchen: boolean;
  isAutoPrintStamp: boolean;
  isPaymentLater: boolean;
  isCheckProductSell: boolean;
  isAutoPrintBillWhenCreateOrder: boolean;
  numberOfBillsPrintWhenCreateOrder: number;
  isAutoPrintBillWhenDoPaymentForOrder: boolean;
  numberOfBillsPrintWhenDoPaymentForOrder: number;
  isAllowPrintBillAtOrderManagement: boolean;
  numberOfBillsPrintAtOrderManagement: number;
  isAutoPrintStampWhenCreateOrder: boolean;
  isAllowPrintStampAtOrderManagement: boolean;
  googleApiKey: string;
  deliveryMethod: IDeliveryMethod[];
  isShowPaymentByCash?: boolean;
  isShowMomoPayment?: boolean;
  isShowPaymentByBankTransfer?: boolean;
  isShowVnPayPayment?: boolean;
  isShowMPosPayment?: boolean;
  numberOfDaysAdvanceReservations: number;
  personalPaymentMethods?: IPersonalPaymentMethod[];
  isAllowReserveTable?: boolean;
  productBarcodeConfig: IDeliveryMethod[];
  isApplyMultiPromotion: boolean;
  isApplyProduct: boolean;
  isApplyOrder: boolean;
  isOrderSlipAutoPrintAfterCreate: boolean;
  numberOfSlipsWillBePrinted: number;
  isApplyManualPromotion: boolean;
}

export interface IPersonalPaymentMethod {
  id: string;
  name: string;
  logo: string;
}

export interface IRoleResp {
  enable: boolean;
  permissionId: string;
}

export interface IUserRole {
  isCashier: boolean;
  isKitchen: boolean;
  isViewReservation: boolean;
  isEditReservation: boolean;
  isCreateReservation: boolean;
  isCancelReservation: boolean;
}

export interface ILoginInfo {
  userName: string;
  passWord: string;
}

export interface IBarcodeConfig {
  isShowCode: boolean;
  isShowName: boolean;
  isShowPrice: boolean;
}

export interface IBarcodeConfig {
  isShowCode: boolean;
  isShowName: boolean;
  isShowPrice: boolean;
}

export interface IRememberAccount {
  isRemember: boolean;
  users: ILoginInfo[];
  lastLogin?: ILoginInfo;
}

export interface IMPosConfig {
  merchantId: string;
  secretKey: string;
  devices: IMPosDevice[]
}

export interface IMPosDevice {
  id: string;
}