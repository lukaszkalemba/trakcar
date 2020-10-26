import React from 'react';
import join_icon from 'assets/svgs/icon_join.svg';
import create_icon from 'assets/svgs/icon_create.svg';
import Button from 'components/button/Button';
import styles from './NoOrganizationInfo.module.scss';

const NoOrganizationInfo: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.info}>
        You are not a member of any organization yet.
      </h1>
      <div className={styles.actions}>
        <Button icon={create_icon}>create new</Button>
        <Button icon={join_icon}>join existing</Button>
      </div>
    </section>
  );
};

export default NoOrganizationInfo;
