import React from 'react';
import { useSelector } from 'react-redux';
import { usersSelector } from 'modules/users';
import cx from 'classnames';
import arrow_down_icon from 'assets/svgs/icon_arrow-down.svg';
import Icon from 'components/icon/Icon';
import Avatar from 'components/avatar/Avatar';
import styles from './UserButton.module.scss';

const UserButton: React.FC<UserButtonProps> = ({
  isDropdownOpen,
  toggleDropdown,
}) => {
  const { user } = useSelector(usersSelector);

  const iconClass = cx(styles.expandArrow, {
    [styles.active]: isDropdownOpen,
  });

  return (
    <button className={styles.button} onClick={toggleDropdown}>
      <div className={styles.avatarWrapper}>
        <Avatar avatar={user?.avatar} />
      </div>
      <div className={styles.user}>
        <div className={styles.username}>{user?.name}</div>
        <Icon className={iconClass} src={arrow_down_icon} />
      </div>
    </button>
  );
};

interface UserButtonProps {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
}

export default UserButton;
