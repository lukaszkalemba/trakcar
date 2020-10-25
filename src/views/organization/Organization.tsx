import React from 'react';
import { useSelector } from 'react-redux';
import { usersSelector } from 'modules/users';
import Layout from 'components/layout/Layout';
import User from './user/User';
import styles from './Organization.module.scss';

const Organization: React.FC = () => {
  const { loading } = useSelector(usersSelector);

  if (loading) return <div>loading</div>;

  return (
    <Layout>
      <div className={styles.wrapper}>
        <User />
      </div>
    </Layout>
  );
};

export default Organization;
