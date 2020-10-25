import React from 'react';
import { useSelector } from 'react-redux';
import { usersSelector } from 'modules/users';
import Avatar from 'components/avatar/Avatar';
import styles from './User.module.scss';

const User: React.FC = () => {
  const { user } = useSelector(usersSelector);

  return (
    <section className={styles.wrapper}>
      <div className={styles.avatar}>
        <Avatar avatar={user?.avatar} />
      </div>
      <div className={styles.userData}>
        <p className={styles.username}>{user?.name}</p>
        <p className={styles.email}>{user?.email}</p>
      </div>
    </section>
  );
};

export default User;
