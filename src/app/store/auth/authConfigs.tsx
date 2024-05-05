import EarthContactIcon from '@/components/Icons/EarthContactIcon';
import EmailLoginIcon from '@/components/Icons/EmailLoginIcon';
import PhoneContactIcon from '@/components/Icons/PhoneContactIcon';
import React from 'react';
export enum AUTH_STATE {
  LOGIN_FORM,
  CHOOSE_STORE,
  CHOOSE_BRANCH,
  START_SHIFT,
  GREAT,
}
export const AUTHENTICATE_KEY = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  WORK_SPACE: 'WORK_SPACE',
  PERMISSIONS: 'PERMISSIONS',
  BANK_TRANSFER_INFO: 'BANK_TRANSFER_INFO',
};
export const urlApi = {
  login: 'login/authenticate',
  getInitialAmountFromEndShiftByBranchId: 'shift/get-initial-amount-from-end-shift-by-branch-id/{branchId}',
  startShift: 'shift/start-shift',
  fetchWorkspaceInfo: 'store/workspace',
  storeInfo: 'store/get-store-info',
  getPermissions: 'permission',
  checkStoreExpireDate: 'login/store-expire-date',
  fetchStoreConfigInfo: 'store/config',
};
export interface IInfoContacts {
  target: EnumTargetContact,
  title: string,
  icon: JSX.Element,
}
export enum EnumTargetContact {
  WEB, MAIL, PHONE
}
export const InfoContacts:IInfoContacts[] = [
  {
    target: EnumTargetContact.WEB,
    title: 'www.gosell.vn',
    icon: <EarthContactIcon color='#50429B' />,
  },
  {
    target: EnumTargetContact.MAIL,
    title: 'hotro@gofnb.com',
    icon: <EmailLoginIcon color='#50429B' />,
  },
  {
    target: EnumTargetContact.PHONE,
    title: '028 7303 0800',
    icon: <PhoneContactIcon color='#50429B' />,
  },
];
export const claimTypes = {
  id: 'ID',
  accountId: 'ACCOUNT_ID',
  accountType: 'ACCOUNT_TYPE',
  shiftId: 'SHIFT_ID',
  permissions: 'PERMISSIONS',
  fullName: 'FULL_NAME',
  email: 'EMAIL',
  currencyCode: 'CURRENCY_CODE',
  currencySymbol: 'CURRENCY_SYMBOL',
  storeId: 'STORE_ID',
  storeName: 'STORE_NAME',
  branchId: 'BRANCH_ID',
  branchName: 'BRANCH_NAME',
  address: 'ADDRESS',
  thumbnail: 'THUMBNAIL',
  isStartShift: 'IS_START_SHIFT',
  exp: 'exp',
  staffThumbnail: 'STAFFTHUMBNAIL',
};

export const FORMAT_CURRENCY_BY_REGION = {
  VND: 'VND',
};

export const SUPPORT_CONTACT = {
  PHONE: '(028) 7303 0800',
  EMAIL: 'hotro@gosell.vn',
};

export const PERMISSION_KEYS = {
  ADMIN: '6C626154-5065-7265-6D69-7373000007D0',
  VIEW_PRODUCT: '6C626154-5065-7265-6D69-737300000001',
  CREATE_PRODUCT: '6C626154-5065-7265-6D69-737300000002',
  EDIT_PRODUCT: '6C626154-5065-7265-6D69-737300000003',
  DELETE_PRODUCT: '6C626154-5065-7265-6D69-737300000004',
  ACTIVATE_PRODUCT: '6C626154-5065-7265-6D69-737300000005',
  DEACTIVATE_PRODUCT: '6C626154-5065-7265-6D69-737300000006',
  IMPORT_PRODUCT: '6C626154-5065-7265-6D69-737300000007',
  EXPORT_PRODUCT: '6C626154-5065-7265-6D69-737300000008',
  VIEW_OPTION: '6C626154-5065-7265-6D69-737300000009',
  CREATE_OPTION: '6C626154-5065-7265-6D69-73730000000A',
  EDIT_OPTION: '6C626154-5065-7265-6D69-73730000000B',
  DELETE_OPTION: '6C626154-5065-7265-6D69-73730000000C',
  VIEW_COMBO: '6C626154-5065-7265-6D69-73730000000D',
  CREATE_COMBO: '6C626154-5065-7265-6D69-73730000000E',
  EDIT_COMBO: '6C626154-5065-7265-6D69-73730000000F',
  DELETE_COMBO: '6C626154-5065-7265-6D69-737300000010',
  VIEW_MATERIAL: '6C626154-5065-7265-6D69-737300000011',
  CREATE_MATERIAL: '6C626154-5065-7265-6D69-737300000012',
  EDIT_MATERIAL: '6C626154-5065-7265-6D69-737300000013',
  DELETE_MATERIAL: '6C626154-5065-7265-6D69-737300000014',
  ACTIVATE_MATERIAL: '6C626154-5065-7265-6D69-737300000015',
  DEACTIVATE_MATERIAL: '6C626154-5065-7265-6D69-737300000016',
  IMPORT_MATERIAL: '6C626154-5065-7265-6D69-737300000017',
  EXPORT_MATERIAL: '6C626154-5065-7265-6D69-737300000018',
  VIEW_PRODUCT_CATEGORY: '6C626154-5065-7265-6D69-737300000019',
  CREATE_PRODUCT_CATEGORY: '6C626154-5065-7265-6D69-73730000001A',
  EDIT_PRODUCT_CATEGORY: '6C626154-5065-7265-6D69-73730000001B',
  DELETE_PRODUCT_CATEGORY: '6C626154-5065-7265-6D69-73730000001C',
  VIEW_MATERIAL_CATEGORY: '6C626154-5065-7265-6D69-73730000001D',
  CREATE_MATERIAL_CATEGORY: '6C626154-5065-7265-6D69-73730000001E',
  EDIT_MATERIAL_CATEGORY: '6C626154-5065-7265-6D69-73730000001F',
  DELETE_MATERIAL_CATEGORY: '6C626154-5065-7265-6D69-737300000020',
  VIEW_SUPPLIER: '6C626154-5065-7265-6D69-737300000021',
  CREATE_SUPPLIER: '6C626154-5065-7265-6D69-737300000022',
  EDIT_SUPPLIER: '6C626154-5065-7265-6D69-737300000023',
  DELETE_SUPPLIER: '6C626154-5065-7265-6D69-737300000024',
  VIEW_PURCHASE: '6C626154-5065-7265-6D69-737300000025',
  CREATE_PURCHASE: '6C626154-5065-7265-6D69-737300000026',
  EDIT_PURCHASE: '6C626154-5065-7265-6D69-737300000027',
  CANCEL_PURCHASE: '6C626154-5065-7265-6D69-737300000028',
  APPROVE_PURCHASE: '6C626154-5065-7265-6D69-737300000029',
  IMPORT_GOODS: '6C626154-5065-7265-6D69-73730000002A',
  VIEW_TRANSFER: '6C626154-5065-7265-6D69-73730000002B',
  CREATE_TRANSFER: '6C626154-5065-7265-6D69-73730000002C',
  EDIT_TRANSFER: '6C626154-5065-7265-6D69-73730000002D',
  CANCEL_TRANSFER: '6C626154-5065-7265-6D69-73730000002E',
  SHIP_GOODS: '6C626154-5065-7265-6D69-73730000002F',
  RECEIVE_GOODS: '6C626154-5065-7265-6D69-737300000030',
  VIEW_CUSTOMER: '6C626154-5065-7265-6D69-737300000031',
  CREATE_CUSTOMER: '6C626154-5065-7265-6D69-737300000032',
  EDIT_CUSTOMER: '6C626154-5065-7265-6D69-737300000033',
  DELETE_CUSTOMER: '6C626154-5065-7265-6D69-737300000034',
  VIEW_SEGMENT: '6C626154-5065-7265-6D69-737300000035',
  CREATE_SEGMENT: '6C626154-5065-7265-6D69-737300000036',
  EDIT_SEGMENT: '6C626154-5065-7265-6D69-737300000037',
  DELETE_SEGMENT: '6C626154-5065-7265-6D69-737300000038',
  VIEW_PROMOTION: '6C626154-5065-7265-6D69-737300000039',
  CREATE_PROMOTION: '6C626154-5065-7265-6D69-73730000003A',
  EDIT_PROMOTION: '6C626154-5065-7265-6D69-73730000003B',
  DELETE_PROMOTION: '6C626154-5065-7265-6D69-73730000003C',
  STOP_PROMOTION: '6C626154-5065-7265-6D69-73730000003D',
  VIEW_AREA_TABLE: '6C626154-5065-7265-6D69-73730000003E',
  CREATE_AREA_TABLE: '6C626154-5065-7265-6D69-73730000003F',
  EDIT_AREA_TABLE: '6C626154-5065-7265-6D69-737300000040',
  DELETE_AREA_TABLE: '6C626154-5065-7265-6D69-737300000041',
  VIEW_MEMBERSHIP_LEVEL: '6C626154-5065-7265-6D69-737300000042',
  CREATE_MEMBERSHIP_LEVEL: '6C626154-5065-7265-6D69-737300000043',
  EDIT_MEMBERSHIP_LEVEL: '6C626154-5065-7265-6D69-737300000044',
  DELETE_MEMBERSHIP_LEVEL: '6C626154-5065-7265-6D69-737300000045',
  VIEW_FEE: '6C626154-5065-7265-6D69-737300000046',
  CREATE_FEE: '6C626154-5065-7265-6D69-737300000047',
  DELETE_FEE: '6C626154-5065-7265-6D69-737300000048',
  VIEW_TAX: '6C626154-5065-7265-6D69-737300000049',
  CREATE_TAX: '6C626154-5065-7265-6D69-73730000004A',
  DELETE_TAX: '6C626154-5065-7265-6D69-73730000004B',
  VIEW_SHIFT: '6C626154-5065-7265-6D69-73730000004C',
  VIEW_ORDER: '6C626154-5065-7265-6D69-73730000004D',
  CREATE_ORDER: '6C626154-5065-7265-6D69-73730000004E',
  EDIT_ORDER: '6C626154-5065-7265-6D69-73730000004F',
  DELETE_ORDER: '6C626154-5065-7265-6D69-737300000050',
  CANCEL_ORDER: '6C626154-5065-7265-6D69-737300000051',
  CASHIER: '6C626154-5065-7265-6D69-737300000052',
  SERVICE: '6C626154-5065-7265-6D69-737300000053',
  KITCHEN: '6C626154-5065-7265-6D69-737300000054',
  VIEW_LOYALTY_POINT: '6C626154-5065-7265-6D69-737300000055',
  STOP_FEE: '6C626154-5065-7265-6D69-737300000056',
  STOP_COMBO: '6C626154-5065-7265-6D69-737300000057',
  VIEW_THEME_STORE: '6C626154-5065-7265-6D69-737300000058',
  EDIT_THEME: '6C626154-5065-7265-6D69-737300000059',
  REMOVE_THEME: '6C626154-5065-7265-6D69-73730000005A',
  VIEW_EMAIL_CAMPAIGN: '6C626154-5065-7265-6D69-73730000005B',
  CREATE_EMAIL_CAMPAIGN: '6C626154-5065-7265-6D69-73730000005C',
  EDIT_EMAIL_CAMPAIGN: '6C626154-5065-7265-6D69-73730000005D',
  DELETE_EMAIL_CAMPAIGN: '6C626154-5065-7265-6D69-73730000005E',
  STOP_EMAIL_CAMPAIGN: '6C626154-5065-7265-6D69-73730000005F',
  VIEW_QR_CODE: '6C626154-5065-7265-6D69-737300000060',
  CREATE_QR_CODE: '6C626154-5065-7265-6D69-737300000061',
  EDIT_QR_CODE: '6C626154-5065-7265-6D69-737300000062',
  DELETE_QR_CODE: '6C626154-5065-7265-6D69-737300000063',
  STOP_QR_CODE: '6C626154-5065-7265-6D69-737300000064',
  VIEW_INVENTORY_HISTORY: '6C626154-5065-7265-6D69-737300000065',
  VIEW_CUSTOMER_REPORT: '6C626154-5065-7265-6D69-737300000066',
  VIEW_FLASH_SALE: '6C626154-5065-7265-6D69-73730000006F',
  CREATE_FLASH_SALE: '6C626154-5065-7265-6D69-737300000070',
  EDIT_FLASH_SALE: '6C626154-5065-7265-6D69-737300000071',
  DELETE_FLASH_SALE: '6C626154-5065-7265-6D69-737300000072',
  STOP_FLASH_SALE: '6C626154-5065-7265-6D69-737300000073',
  VIEW_RESERVATION: '6C626154-5065-7265-6D69-73730000016A',
  EDIT_RESERVATION: '6C626154-5065-7265-6D69-73730000016C',
  CREATE_RESERVATION: '6C626154-5065-7265-6D69-73730000016B',
  CANCEL_RESERVATION: '6C626154-5065-7265-6D69-73730000016D',
};