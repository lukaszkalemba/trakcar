import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPositions, positionsSelector } from 'modules/positions';
import Layout from 'components/layout/Layout';
import styles from './Positions.module.scss';
import PositionsList from './positions-list/PositionsList';
import CreatePositionButton from './create-position-button/CreatePositionButton';
import CreatePositionModal from './create-position-modal/CreatePositionModal';

const Positions: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { positions, loading } = useSelector(positionsSelector);

  useEffect(() => {
    dispatch(getAllPositions());
  }, [dispatch]);

  const closeModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleDeleteButtonClick = () => {
    setIsCreateModalOpen(true);
  };

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <Layout>
      <div className={styles.wrapper}>
        {positions?.length ? (
          <PositionsList positions={positions} />
        ) : (
          'there are no positions in your organization yet.'
        )}

        <CreatePositionButton onClick={handleDeleteButtonClick}>
          Create new position
        </CreatePositionButton>

        {isCreateModalOpen && <CreatePositionModal closeModal={closeModal} />}
      </div>
    </Layout>
  );
};

export default Positions;
