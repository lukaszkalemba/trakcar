import React from 'react';
import Layout from 'components/layout/Layout';
import styles from './Profile.module.scss';

const Profile: React.FC = () => {
  return (
    <Layout>
      <div className={styles.wrapper} />
    </Layout>
  );
};

export default Profile;
