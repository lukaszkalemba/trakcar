import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPositions, positionsSelector } from 'modules/positions';
import { usersSelector } from 'modules/users';
import Layout from 'components/layout/Layout';
import styles from './Positions.module.scss';
import PositionsList from './positions-list/PositionsList';
import CreatePositionButton from './create-position-button/CreatePositionButton';
import CreatePositionModal from './create-position-modal/CreatePositionModal';

const Positions: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { positions, loading } = useSelector(positionsSelector);
  const { user } = useSelector(usersSelector);

  useEffect(() => {
    dispatch(getAllPositions());
  }, [dispatch]);

  const closeModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleDeleteButtonClick = () => {
    setIsCreateModalOpen(true);
  };

  const renderResults = () => {
    if (loading) {
      return <div>loading</div>;
    }

    if (user?.organization && positions?.length) {
      return (
        <>
          <PositionsList positions={positions} />

          <CreatePositionButton onClick={handleDeleteButtonClick}>
            Create new position
          </CreatePositionButton>
          {isCreateModalOpen && <CreatePositionModal closeModal={closeModal} />}
        </>
      );
    }

    if (user?.organization && !positions?.length) {
      return (
        <>
          <p>there are no positions in your organization yet.</p>

          <CreatePositionButton onClick={handleDeleteButtonClick}>
            Create new position
          </CreatePositionButton>
          {isCreateModalOpen && <CreatePositionModal closeModal={closeModal} />}
        </>
      );
    }

    return (
      <p>
        you have to be a member of an organization to be able to add position
      </p>
    );
  };

  return (
    <Layout>
      <div className={styles.wrapper}>{renderResults()}</div>
    </Layout>
  );
};

export default Positions;
