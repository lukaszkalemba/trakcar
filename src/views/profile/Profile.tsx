import React from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { usersSelector } from 'modules/users';
import Layout from 'components/layout/Layout';
import Avatar from 'components/avatar/Avatar';
import styles from './Profile.module.scss';

const Profile: React.FC = () => {
  const { loading, user } = useSelector(usersSelector);

  if (loading) {
    return <div>loading</div>;
  }

  const creationDate = format(new Date(user?.date as string), 'mm/dd/yyyy');

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.avatarWrapper}>
          <Avatar avatar={user?.avatar} />
        </div>
        <h3>{user?.name}</h3>
        <h3>{user?.email}</h3>
        <h3>{creationDate}</h3>
        <h3>
          {user?.organization
            ? user?.organization
            : 'you are not a member of any organization'}
        </h3>
      </div>
    </Layout>
  );
};

export default Profile;
