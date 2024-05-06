export interface ILoginForm {
  userName: string;
  password: string;
  accessToken: string;
}

type OAuthTokenProvider = 'Microsoft';
export interface ITokenRequest {
  provider: OAuthTokenProvider;
  accessToken: string;
}

export interface TokenResponse {
  accessToken: string;
}
