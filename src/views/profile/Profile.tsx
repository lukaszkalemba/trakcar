import React from 'react';
import { useSelector } from 'react-redux';
import { usersSelector } from 'modules/users';
import Layout from 'components/layout/Layout';
import Avatar from 'components/avatar/Avatar';
import styles from './Profile.module.scss';

const Profile: React.FC = () => {
  const { loading, user } = useSelector(usersSelector);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.avatarWrapper}>
          <Avatar avatar={user?.avatar} />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
