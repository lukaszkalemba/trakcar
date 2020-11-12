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
        <h1 className={styles.username}>{name}</h1>
        <p className={styles.email}>{email}</p>
      </div>
    </section>
  );
};

interface UserProps {
  name?: string;
  email?: string;
  avatar?: string;
}

export default User;
