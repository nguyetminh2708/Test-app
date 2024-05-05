import { Configuration, RedirectRequest } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: 'faf746d7-cad0-4f43-a93b-d5d90284fad2',
    authority: 'https://login.microsoftonline.com/f01e930a-b52e-42b1-b70f-a8882b5d043b',
    // eslint-disable-next-line no-restricted-globals
    redirectUri: `${location.origin}/signin_redirect`,
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest: RedirectRequest = {
  scopes: ['User.Read'],
};
