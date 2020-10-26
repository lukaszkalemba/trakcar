import React from 'react';
import Avatar from 'components/avatar/Avatar';
import styles from './User.module.scss';

const User: React.FC<UserProps> = ({ name, email, avatar }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.avatar}>
        <Avatar avatar={avatar} />
      </div>
      <div className={styles.userData}>
        <p className={styles.username}>{name}</p>
        <p className={styles.email}>{email}</p>
      </div>
    </section>
  );
};

interface UserProps {
  name: string | undefined;
  email: string | undefined;
  avatar: string | undefined;
}

export default User;
