import React, { ReactElement } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props: {}) =>
      !isAuthenticated && !loading ? (
        <Redirect to="/login" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

interface Auth {
  isAuthenticated: boolean;
  loading: boolean;
}

interface PrivateRouteProps {
  Component: () => ReactElement;
  auth: Auth;
}

export default PrivateRoute;
