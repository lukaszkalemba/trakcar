import React, { useState } from 'react';
import join_icon from 'assets/svgs/icon_join.svg';
import create_icon from 'assets/svgs/icon_create.svg';
import ModalTemplate from 'templates/modal-template/ModalTemplate';
import Button from 'components/button/Button';
import styles from './NoOrganizationInfo.module.scss';

const NoOrganizationInfo: React.FC = () => {
  const [isCreationModalOpen, setIsCreationModalOpen] = useState<boolean>(
    false
  );

  const [isExistenceModalOpen, setIsExistenceModalOpen] = useState<boolean>(
    false
  );

  return (
    <>
      <section className={styles.wrapper}>
        <h1 className={styles.info}>
          You are not a member of any organization yet.
        </h1>
        <div className={styles.actions}>
          <Button
            icon={create_icon}
            onClick={() => setIsCreationModalOpen(true)}
          >
            create new
          </Button>
          <Button
            icon={join_icon}
            onClick={() => setIsExistenceModalOpen(true)}
          >
            join existing
          </Button>
        </div>
      </section>

      {isCreationModalOpen && (
        <ModalTemplate closeModal={() => setIsCreationModalOpen(false)}>
          create new organization
        </ModalTemplate>
      )}

      {isExistenceModalOpen && (
        <ModalTemplate closeModal={() => setIsExistenceModalOpen(false)}>
          join existing organization
        </ModalTemplate>
      )}
    </>
  );
};

export default NoOrganizationInfo;
