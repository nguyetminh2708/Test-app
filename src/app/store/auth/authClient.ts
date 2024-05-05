import APIClient, {paramsToUrl} from '@/app/api/axios/AxiosClient';
import {urlApi} from './authConfigs';

export default class AuthClient extends APIClient {
  login(input: any, cancelToken?: any) {
    return super.post(urlApi.login, input, cancelToken);
  }
  startShift(input: any, cancelToken?: any) {
    return super.post(urlApi.startShift, input, cancelToken);
  }

  getInitialAmountFromEndShiftByBranchId(input: any, cancelToken?: any) {
    return super.get(urlApi.getInitialAmountFromEndShiftByBranchId, input, cancelToken);
  }

  getPermissions(cancelToken?: any) {
    return super.get(urlApi.getPermissions, null, cancelToken);
  }

  fetchWorkspaceInfo(token?: string, cancelToken?: any) {
    token && super.setToken(token);
    return super.get(urlApi.fetchWorkspaceInfo, cancelToken);
  }

  fetchStoreConfigInfo(token?: string, cancelToken?: any) {
    token && super.setToken(token);
    return super.get(urlApi.fetchStoreConfigInfo, cancelToken);
  }

  getStoreInfo() {
    return super.get(urlApi.storeInfo, null);
  }

  checkStoreExpireDate(storeIds: string, cancelToken?: any) {
    return super.get(`${urlApi.checkStoreExpireDate}${paramsToUrl({storeIds})}`, cancelToken);
  }
}
