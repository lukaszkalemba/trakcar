import React from 'react';
import { useDispatch } from 'react-redux';
import { signOutUser } from 'modules/users';
import logout_icon from 'assets/svgs/icon_logout.svg';
import Button from 'components/button/Button';
import organization_icon from 'assets/svgs/icon_organization-black.svg';
import styles from './Dropdown.module.scss';

const Dropdown: React.FC = () => {
  const dispatch = useDispatch();

  const handleSignOutButtonClick = () => {
    dispatch(signOutUser());
  };

  return (
    <div className={styles.dropdown}>
      <Button type="link" to="/organization" icon={organization_icon}>
        organization
      </Button>
      <Button icon={logout_icon} onClick={handleSignOutButtonClick}>
        logout
      </Button>
    </div>
  );
};

export default Dropdown;
