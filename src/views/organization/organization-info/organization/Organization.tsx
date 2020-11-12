import React from 'react';
import styles from './Organization.module.scss';

const Organization: React.FC<OrganizationProps> = ({ name, userType }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.userType}>{userType}</p>
    </div>
  );
};

interface OrganizationProps {
  name?: string;
  userType: 'admin' | 'standard user';
}

export default Organization;
