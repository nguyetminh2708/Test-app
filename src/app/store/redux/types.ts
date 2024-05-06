import { IAuthState } from './auth/reducer';

export interface IStore {
  auth: IAuthState;
}
