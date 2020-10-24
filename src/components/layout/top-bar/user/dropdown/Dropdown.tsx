import React from 'react';
import { useDispatch } from 'react-redux';
import { signOutUser } from 'modules/users';
import logout_icon from 'assets/svgs/icon_logout.svg';
import Button from 'components/button/Button';
import black_profile_icon from 'assets/svgs/icon_profile-black.svg';
import styles from './Dropdown.module.scss';

const Dropdown: React.FC = () => {
  const dispatch = useDispatch();

  const handleSignOutButtonClick = () => {
    dispatch(signOutUser());
  };

  return (
    <div className={styles.dropdown}>
      <Button type="link" to="/profile" iconSrc={black_profile_icon}>
        profile
      </Button>
      <Button iconSrc={logout_icon} onClick={handleSignOutButtonClick}>
        logout
      </Button>
    </div>
  );
};

export default Dropdown;
