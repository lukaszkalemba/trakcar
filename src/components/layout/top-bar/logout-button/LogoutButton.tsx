import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUser } from 'modules/users';
import logout_icon from 'assets/svgs/icon_logout.svg';
import Button from 'components/button/Button';
import styles from './LogoutButton.module.scss';

const Dropdown: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignOutButtonClick = () => {
    dispatch(signOutUser(history.push));
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
