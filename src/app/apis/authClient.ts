import { ILoginForm, ITokenRequest, TokenResponse } from '../types/LoginForm';
import { fetchAsync } from '../utils/fetchUtils';

export const login = async (form: ILoginForm): Promise<TokenResponse> => {
  return fetchAsync('/api/auth/login', {
    method: 'POST',
    body: form,
  });
};

export const exchangeToken = async (request: ITokenRequest): Promise<TokenResponse> => {
  return fetchAsync('/api/auth/token', {
    method: 'POST',
    body: request,
  });
};
