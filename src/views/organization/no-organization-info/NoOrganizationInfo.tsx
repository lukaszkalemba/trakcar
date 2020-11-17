import React from 'react';
import share_icon from 'assets/svgs/icon_share.svg';
import plus_icon from 'assets/svgs/icon_plus.svg';
import Button from 'components/button/Button';
import Heading from 'components/heading/Heading';
import styles from './NoOrganizationInfo.module.scss';

const NoOrganizationInfo: React.FC<NoOrganizationInfoProps> = ({
  openCreateModal,
  openJoinModal,
}) => {
  return (
    <>
      <section className={styles.wrapper}>
        <Heading>You are not a member of any organization yet.</Heading>
        <div className={styles.actions}>
          <Button icon={plus_icon} onClick={openCreateModal}>
            create new
          </Button>
          <Button icon={share_icon} onClick={openJoinModal}>
            join existing
          </Button>
        </div>
      </section>
    </>
  );
};

interface NoOrganizationInfoProps {
  openCreateModal: () => void;
  openJoinModal: () => void;
}

export default NoOrganizationInfo;
