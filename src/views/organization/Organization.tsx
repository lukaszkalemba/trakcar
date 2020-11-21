import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from 'modules/users';
import {
  loadOrganizationData,
  organizationsSelector,
} from 'modules/organizations';
import Seo from 'components/seo/Seo';
import Layout from 'components/layout/Layout';
import LoadingSpinner from 'components/loading-spinner/LoadingSpinner';
import User from './user/User';
import OrganizationInfo from './organization-info/OrganizationInfo';
import NoOrganizationInfo from './no-organization-info/NoOrganizationInfo';
import CreateOrganizationModal from './create-organization-modal/CreateOrganizationModal';
import JoinOrganizationModal from './join-organization-modal/JoinOrganizationModal';
import styles from './Organization.module.scss';

const Organization: React.FC = () => {
  const dispatch = useDispatch();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState<boolean>(false);

  const { user, loading: userLoading } = useSelector(usersSelector);
  const { organization, loading: organizationLoading } = useSelector(
    organizationsSelector
  );

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

  useEffect(() => {
    dispatch(loadOrganizationData());
  }, [dispatch]);

  return (
    <>
      <Seo title="organization" />

      <Layout>
        <div className={styles.wrapper}>
          {userLoading || organizationLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <User
                avatar={user?.avatar}
                name={user?.name}
                email={user?.email}
              />
              {organization ? (
                <OrganizationInfo />
              ) : (
                <NoOrganizationInfo
                  openCreateModal={openCreateModal}
                  openJoinModal={openJoinModal}
                />
              )}
            </>
          )}

          {isCreateModalOpen && (
            <CreateOrganizationModal closeModal={closeCreateModal} />
          )}

          {isJoinModalOpen && (
            <JoinOrganizationModal closeModal={closeJoinModal} />
          )}
        </div>
      </Layout>
    </>
  );
};

export default Organization;
