import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPositions, positionsSelector } from 'modules/positions';
import icon_plus from 'assets/svgs/icon_circle-plus.svg';
import Layout from 'components/layout/Layout';
import Button from 'components/button/Button';
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

        <Button className={styles.button} icon={icon_plus}>
          Create new position
        </Button>
      </div>
    </Layout>
  );
};

export default Positions;
