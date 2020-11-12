import React from 'react';
import { useDispatch } from 'react-redux';
import { signOutUser } from 'modules/users';
import logout_icon from 'assets/svgs/icon_logout.svg';
import Button from 'components/button/Button';
import styles from './LogoutButton.module.scss';

const Dropdown: React.FC = () => {
  const dispatch = useDispatch();

  const handleSignOutButtonClick = () => {
    dispatch(signOutUser());
  };

  return (
    <Button
      className={styles.button}
      icon={logout_icon}
      onClick={handleSignOutButtonClick}
    >
      logout
    </Button>
  );
};

export default Dropdown;
