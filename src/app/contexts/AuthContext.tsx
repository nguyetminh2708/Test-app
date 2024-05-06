import { createContext, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import jwtdecode from 'jwt-decode';
import { ACCESS_TOKEN_KEY } from '../common/constants';
import { IUserClaims } from '../types/user';

const NameClaim = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name';
const NameIdentifier = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier';
const RoleClaim = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

interface IJwtToken {
  aud: string;
  exp: number;
  [NameClaim]: string;
  [NameIdentifier]: string;
  iat: number;
  iss: string;
  jti: string;
  nbf: number;
  sub: string;
}

interface IAuthContext {
  user: IUserClaims;
  expiredAt: Date;
  issuedAt: Date;
  logOut: () => void;
}

interface IProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext>(null);

export const AuthContextProvider = ({ children }: IProps) => {
  //To do context
  const [state, setState] = useState<IAuthContext>(null);
  const history = useHistory();
  const logOut = useCallback(() => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    setState(null);
    history.push('/login');
  }, [history]);

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (token) {
      try {
        // const decodedToken = jwtdecode<IJwtToken>(token);
        // if (decodedToken.exp >= new Date().getTime() / 1000) {
        //   const roles: UserRole[] =
        //     typeof decodedToken[RoleClaim] === 'string' ? [decodedToken[RoleClaim]] : decodedToken[RoleClaim];
        //   setState({
        //     expiredAt: new Date(decodedToken.exp),
        //     issuedAt: new Date(decodedToken.iat),
        //     user: {
        //       fullName: decodedToken[NameClaim],
        //       id: decodedToken[NameIdentifier],
        //       roles,
        //       isAdmin: roles?.includes('admin'),
        //     },
        //     logOut,
        //   });
        //   return;
        // }
        const currentDate = new Date();
        setState({
          expiredAt: new Date(currentDate.getDate() + 1),
          issuedAt: currentDate,
          user: {
            fullName: 'test user',
            id: 1,
            roles: ['admin', 'user'],
            isAdmin: true,
          },
          logOut,
        });
        return;
      } catch (err) {
        console.error(err);
      }
    }

    setState(null);
    history.push('/login');
  }, [history, logOut]);

  return <AuthContext.Provider value={state}>{state?.user && children}</AuthContext.Provider>;
};
