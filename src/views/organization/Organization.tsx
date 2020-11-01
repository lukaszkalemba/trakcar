import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from 'modules/users';
import {
  loadOrganizationData,
  organizationsSelector,
} from 'modules/organizations';
import Layout from 'components/layout/Layout';
import User from './user/User';
import NoOrganizationInfo from './no-organization-info/NoOrganizationInfo';
import styles from './Organization.module.scss';

const Organization: React.FC = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector(usersSelector);
  const { organization } = useSelector(organizationsSelector);

  useEffect(() => {
    dispatch(loadOrganizationData());
  }, [dispatch]);

  if (loading) return <div>loading</div>;

  return (
    <Layout>
      <div className={styles.wrapper}>
        <User avatar={user?.avatar} name={user?.name} email={user?.email} />

        {organization ? <h3>{organization.name}</h3> : <NoOrganizationInfo />}
      </div>
    </Layout>
  );
};

export default Organization;
