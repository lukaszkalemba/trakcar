import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from 'modules/users/signup';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ Component, ...rest }) => {
  const { isAuthenticated, loading } = useSelector(userSelector);

  return (
    <Route
      {...rest}
      render={(props: {}) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/sign-in" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

interface PrivateRouteProps {
  Component: React.FC;
  exact?: boolean;
  path?: string;
}

export default PrivateRoute;
