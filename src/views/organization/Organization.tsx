import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from 'modules/users';
import {
  loadOrganizationData,
  organizationsSelector,
} from 'modules/organizations';
import Layout from 'components/layout/Layout';
import LoadingSpinner from 'components/loading-spinner/LoadingSpinner';
import User from './user/User';
import OrganizationInfo from './organization-info/OrganizationInfo';
import NoOrganizationInfo from './no-organization-info/NoOrganizationInfo';
import styles from './Organization.module.scss';

const Organization: React.FC = () => {
  const dispatch = useDispatch();
  const { user, loading: userLoading } = useSelector(usersSelector);
  const { organization, loading: organizationLoading } = useSelector(
    organizationsSelector
  );

  useEffect(() => {
    dispatch(loadOrganizationData());
  }, [dispatch]);

  return (
    <Layout>
      <div className={styles.wrapper}>
        {userLoading || organizationLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <User avatar={user?.avatar} name={user?.name} email={user?.email} />
            {organization ? <OrganizationInfo /> : <NoOrganizationInfo />}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Organization;
