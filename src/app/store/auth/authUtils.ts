import { IStoreInfo, IUserInfo, StoreBranch } from '@/features/auth/types';
import jwt_decode from 'jwt-decode';
import { claimTypes } from './authConfigs';
import { authSelector } from './store/selectors';
import { useAppSelector } from '@/hooks/useStore';

export const getUserInfo = (token?: string): IUserInfo | undefined => {
  if (token) {
    const claims = jwt_decode<{ [key: string]: string }>(token);
    let similarName = '';
    if (claims[claimTypes.fullName] !== '') {
      const split = claims[claimTypes.fullName].split(' ');
      similarName = split && split[0] && split[0][0];
    }
    return {
      userId: claims[claimTypes.id],
      accountId: claims[claimTypes.accountId],
      shiftId: claims[claimTypes.shiftId],
      fullName: claims[claimTypes.fullName],
      emailAddress: claims[claimTypes.email],
      accountType: claims[claimTypes.accountType],
      currencyCode: claims[claimTypes.currencyCode],
      currencySymbol: claims[claimTypes.currencySymbol],
      storeId: claims[claimTypes.storeId],
      storeName: claims[claimTypes.storeName],
      branchId: claims[claimTypes.branchId],
      branchName: claims[claimTypes.branchName],
      address: claims[claimTypes.address],
      thumbnail: claims[claimTypes.thumbnail],
      isStartShift: Boolean(claims[claimTypes.isStartShift]),
      similarName,
      staffThumbnail: claims[claimTypes.staffThumbnail],
    } as IUserInfo;
  }
  return undefined;
};
export const mappingStoreBranchItem = (x: any) => {
  return { id: x.id, name: x.name, thumbnail: x?.thumbnail, address: x?.address || '' };
};

export const getBranchFromStoreId = (stores: IStoreInfo[], id: string) => {
  const branches: StoreBranch[] = (stores.find((x) => x.id === id)?.branches || []).map((branch) => {
    return { id: branch.id, name: branch.name, thumbnail: branch.thumbnail, address: branch.address };
  });
  return branches;
};

  // // TODO check is sufix or prefix;
export const suffixCurrency = (useCurrency: boolean, useDIfVND: boolean) => {
  const { user } = useAppSelector(authSelector);
  useCurrency ? user?.currencyCode || 'đ' : '';
  if (useCurrency) {
    if (useDIfVND && user?.currencyCode === 'VND') {
      return 'đ';
    }
    return user?.currencyCode || 'đ';
  }
  return '';
};
