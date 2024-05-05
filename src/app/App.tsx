import { BrowserRouter, Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import { useContext } from 'react';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './common/authConfig';

import { Login } from './pages/Login';
import { AuthContext, AuthContextProvider } from './contexts/AuthContext';
import { LoginRedirect } from './pages/LoginRedirect';
import { Header } from './components/PageHeader/PageHeader';
import { ProgramDashboard } from './pages/ProgramDashboard';

const msalInstance = new PublicClientApplication(msalConfig);

const AdminRoute = ({ children, ...props }: RouteProps) => {
  const {
    user: { isAdmin },
  } = useContext(AuthContext);

  return <Route {...props}>{isAdmin ? children : 'You are not allowed to view this page'}</Route>;
};

export const App = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
        <Switch>
          <Route path="/signin_redirect">
            <LoginRedirect />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route>
            <AuthContextProvider>
              <Header />
              <div className="app-container">
                <Switch>
                  <Route path="/" exact>
                    <Redirect to="/dashboard" />
                  </Route>
                  <Route path="/dashboard">
                    <ProgramDashboard />
                  </Route>
                  {/* <AdminRoute path="/admin/users">
                    <ManageUsers />
                  </AdminRoute> */}
                </Switch>
              </div>
              <div className="page-footer">Copyright © 2021 All rights reserved</div>
            </AuthContextProvider>
          </Route>
        </Switch>
      </BrowserRouter>
    </MsalProvider>
  );
};
