import React, { useState } from 'react';
import join_icon from 'assets/svgs/icon_join.svg';
import create_icon from 'assets/svgs/icon_create.svg';
import Button from 'components/button/Button';
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
        <h1 className={styles.info}>
          You are not a member of any organization yet.
        </h1>
        <div className={styles.actions}>
          <Button icon={create_icon} onClick={openCreateModal}>
            create new
          </Button>
          <Button icon={join_icon} onClick={openJoinModal}>
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
