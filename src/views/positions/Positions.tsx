import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPositions, positionsSelector } from 'modules/positions';
import { usersSelector } from 'modules/users';
import organization_icon from 'assets/svgs/icon_organization-black.svg';
import Seo from 'components/seo/Seo';
import LoadingSpinner from 'components/loading-spinner/LoadingSpinner';
import Layout from 'components/layout/Layout';
import Button from 'components/button/Button';
import Heading from 'components/heading/Heading';
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
      return <LoadingSpinner />;
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
          <Heading className={styles.heading}>
            There are no positions in your organization yet.
          </Heading>
          <NewPositionContent
            isCreateModalOpen={isCreateModalOpen}
            openModal={openModal}
            closeModal={closeModal}
            noPosition
          />
        </>
      );
    }

    return (
      <>
        <Heading className={styles.heading}>
          You have to be a member of an organization to manage positions.
        </Heading>
        <Button type="link" to="/organization" icon={organization_icon}>
          join an organization
        </Button>
      </>
    );
  };

  return (
    <>
      <Seo title="positions" />

      <Layout>
        <div className={styles.wrapper}>{renderResults()}</div>
      </Layout>
    </>
  );
};

export default Positions;
