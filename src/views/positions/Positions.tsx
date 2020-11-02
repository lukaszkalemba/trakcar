import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPositions, positionsSelector } from 'modules/positions';
import Layout from 'components/layout/Layout';
import styles from './Positions.module.scss';
import PositionsList from './positions-list/PositionsList';

const Positions: React.FC = () => {
  const dispatch = useDispatch();
  const { positions, loading } = useSelector(positionsSelector);

  useEffect(() => {
    dispatch(getAllPositions());
  }, [dispatch]);

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
      </div>
    </Layout>
  );
};

export default Positions;
