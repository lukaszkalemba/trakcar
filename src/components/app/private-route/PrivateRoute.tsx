import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelector, loadUserData } from 'modules/users';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ Component, ...rest }) => {
  const dispatch = useDispatch();
  const { token } = useSelector(usersSelector);

  useEffect(() => {
    dispatch(loadUserData());
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={() => (!token ? <Redirect to="/sign-in" /> : <Component />)}
    />
  );
};

interface PrivateRouteProps {
  Component: React.FC;
  exact?: boolean;
  path?: string;
}

export default PrivateRoute;
