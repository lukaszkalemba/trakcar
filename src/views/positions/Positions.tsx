import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPositions, positionsSelector } from 'modules/positions';
import { usersSelector } from 'modules/users';
import Layout from 'components/layout/Layout';
import Button from 'components/button/Button';
import organization_icon from 'assets/svgs/icon_organization-black.svg';
import PositionsList from './positions-list/PositionsList';
import NewPositionContent from './new-position-content/NewPositionContent';
import styles from './Positions.module.scss';

const Positions: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { positions, loading } = useSelector(positionsSelector);
  const { user } = useSelector(usersSelector);

  useEffect(() => {
    dispatch(getAllPositions());
  }, [dispatch]);

  const openModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeModal = () => {
    setIsCreateModalOpen(false);
  };

  const renderResults = () => {
    if (loading) {
      return <div>loading</div>;
    }

    if (user?.organization && positions?.length) {
      return (
        <>
          <PositionsList positions={positions} />
          <NewPositionContent
            isCreateModalOpen={isCreateModalOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        </>
      );
    }

    if (user?.organization && !positions?.length) {
      return (
        <>
          <h1 className={styles.noPositionsInfo}>
            There are no positions in your organization yet.
          </h1>
          <NewPositionContent
            isCreateModalOpen={isCreateModalOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        </>
      );
    }

    return (
      <>
        <h1 className={styles.noOrganizationInfo}>
          You have to be a member of an organization to manage positions.
        </h1>
        <Button
          type="link"
          to="/organization"
          icon={organization_icon}
          className={styles.organizationLink}
        >
          organization page
        </Button>
      </>
    );
  };

  return (
    <Layout>
      <div className={styles.wrapper}>{renderResults()}</div>
    </Layout>
  );
};

export default Positions;
