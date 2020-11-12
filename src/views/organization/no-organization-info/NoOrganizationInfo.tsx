import React, { useState } from 'react';
import share_icon from 'assets/svgs/icon_share.svg';
import plus_icon from 'assets/svgs/icon_plus.svg';
import Button from 'components/button/Button';
import Heading from 'components/heading/Heading';
import CreateOrganizationModal from './create-organization-modal/CreateOrganizationModal';
import JoinOrganizationModal from './join-organization-modal/JoinOrganizationModal';
import styles from './NoOrganizationInfo.module.scss';

const NoOrganizationInfo: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState<boolean>(false);

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const openJoinModal = () => {
    setIsJoinModalOpen(true);
  };

  const closeJoinModal = () => {
    setIsJoinModalOpen(false);
  };

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

      {isCreateModalOpen && (
        <CreateOrganizationModal closeModal={closeCreateModal} />
      )}

      {isJoinModalOpen && <JoinOrganizationModal closeModal={closeJoinModal} />}
    </>
  );
};

export default NoOrganizationInfo;
