import { useMsal } from '@azure/msal-react';
import { notification, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { exchangeToken } from '../apis/authClient';
import { loginRequest } from '../common/authConfig';
import { ACCESS_TOKEN_KEY } from '../common/constants';

const StyledLoginRedirect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginRedirect = () => {
  const {
    instance,
    accounts: [account],
    inProgress,
  } = useMsal();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function login() {
      try {
        const { accessToken } = await instance.acquireTokenSilent(loginRequest);
        const { accessToken: token } = await exchangeToken({
          accessToken,
          provider: 'Microsoft',
        });
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
        history.push('/');
      } catch (err) {
        let error;
        if (err.status === 404) {
          error = 'Account is not registered. Please contact administration to register your account';
        } else {
          error = 'An error occurred validating the access token';
        }
        setErrorMessage(error);
        notification.error({
          message: error,
        });
      }
    }

    if (account) {
      instance.setActiveAccount(account);
      login();
    }
  }, [history, instance, account]);

  useEffect(() => {
    if (!account && inProgress === 'none') {
      history.push('/login');
    }
  }, [account, history, inProgress]);

  if (errorMessage) {
    return <StyledLoginRedirect>{errorMessage}</StyledLoginRedirect>;
  }

  return (
    <StyledLoginRedirect>
      <Spin tip="Signing in with Microsoft account" />
    </StyledLoginRedirect>
  );
};
