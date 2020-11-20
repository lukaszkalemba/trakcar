import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelector, loadUserData } from 'modules/users';

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const dispatch = useDispatch();
  const { token } = useSelector(usersSelector);

  useEffect(() => {
    dispatch(loadUserData());
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={(props: any) =>
        !token ? <Redirect to="/sign-in" /> : <Component {...props} />
      }
    />
  );
};

interface PrivateRouteProps {
  component: React.FC<any>;
  exact?: boolean;
  path?: string;
}

export default PrivateRoute;
