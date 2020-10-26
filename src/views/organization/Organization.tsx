import React from 'react';
import { useSelector } from 'react-redux';
import { usersSelector } from 'modules/users';
import Layout from 'components/layout/Layout';
import User from './user/User';
import NoOrganizationInfo from './no-organization-info/NoOrganizationInfo';
import styles from './Organization.module.scss';

const Organization: React.FC = () => {
  const { user, loading } = useSelector(usersSelector);

  if (loading) return <div>loading</div>;

  return (
    <Layout>
      <div className={styles.wrapper}>
        <User avatar={user?.avatar} name={user?.name} email={user?.email} />

        {user?.organization ? (
          'you are a member of organization'
        ) : (
          <NoOrganizationInfo />
        )}
      </div>
    </Layout>
  );
};

export default Organization;
