import React, { useState, memo } from 'react';
import { useSelector } from 'react-redux';
import { organizationsSelector } from 'modules/organizations';
import { usersSelector } from 'modules/users';
import Organization from './organization/Organization';
import Members from './members/Members';
import styles from './OrganizationInfo.module.scss';
import DeleteButton from './delete-button/DeleteButton';
import DeleteModal from './delete-modal/DeleteModal';

const OrganizationInfo: React.FC = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const { organization } = useSelector(organizationsSelector);
  const { user } = useSelector(usersSelector);

  const openModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeModal = () => {
    setIsDeleteModalOpen(false);
  };

  const isAdmin = user?._id === organization?.admin;
  const userType = isAdmin ? 'admin' : 'standard user';

  const organizationMembers = organization?.members.filter(
    (member) => member.email !== user?.email
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.organizationWrapper}>
        <Organization
          name={organization?.organizationName}
          userType={userType}
        />

        <Members
          members={organizationMembers}
          organizationName={organization?.organizationName}
        />
      </div>

      {isAdmin && (
        <DeleteButton onClick={openModal}>
          delete {organization?.organizationName}
        </DeleteButton>
      )}

      {isDeleteModalOpen && (
        <DeleteModal
          organizationId={organization?.id}
          organizationName={organization?.organizationName}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default memo(OrganizationInfo);
