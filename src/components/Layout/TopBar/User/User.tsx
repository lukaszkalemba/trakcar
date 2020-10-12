import React from 'react';
import Icon from 'components/Icon/Icon';
import userImage from 'assets/images/image_user.png';
import expandArrow from 'assets/svgs/icon_expand-arrow.svg';
import styles from './User.module.scss';

const User: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatarWrapper}>
        <img src={userImage} className={styles.avatar} alt="user avatar" />
      </div>
      <div className={styles.user}>
        <div className={styles.username}>Julia Smith</div>
        <Icon className={styles.expandArrow} src={expandArrow} />
      </div>
    </div>
  );
};

export default User;
