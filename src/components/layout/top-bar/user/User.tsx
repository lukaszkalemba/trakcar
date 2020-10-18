import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from 'modules/users';
import Icon from 'components/icon/Icon';
import arrowDown from 'assets/svgs/icon_arrow-down.svg';
import styles from './User.module.scss';

const User: React.FC = () => {
  const { loading, user } = useSelector(userSelector);

  return loading ? null : (
    <div className={styles.wrapper}>
      <div className={styles.avatarWrapper}>
        <img src={user?.avatar} className={styles.avatar} alt="user avatar" />
      </div>
      <div className={styles.user}>
        <div className={styles.username}>{user?.name}</div>
        <Icon className={styles.expandArrow} src={arrowDown} />
      </div>
    </div>
  );
};

export default User;
