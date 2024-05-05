import {IStore} from '@/app/store/types';
export const authSelector = (state: IStore) => state.auth;
export const branchIdSelector = (state: IStore) => state.auth?.user?.branchId || '';
