import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { userSelector } from 'modules/users';
import Icon from 'components/icon/Icon';
import arrow_down_icon from 'assets/svgs/icon_arrow-down.svg';
import Dropdown from './dropdown/Dropdown';
import styles from './User.module.scss';

const User: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { loading, user } = useSelector(userSelector);

  const toggleDropdown = () => {
    setIsDropdownOpen((state) => !state);
    console.log(isDropdownOpen);
  };

  const iconClass = cx(styles.expandArrow, {
    [styles.active]: isDropdownOpen,
  });

  return loading ? null : (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={toggleDropdown}>
        <div className={styles.avatarWrapper}>
          <img src={user?.avatar} className={styles.avatar} alt="user avatar" />
        </div>
        <div className={styles.user}>
          <div className={styles.username}>{user?.name}</div>
          <Icon className={iconClass} src={arrow_down_icon} />
        </div>
      </button>
      {isDropdownOpen && <Dropdown />}
    </div>
  );
};

export default User;
