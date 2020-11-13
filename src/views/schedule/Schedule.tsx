import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPositions, positionsSelector } from 'modules/positions';
import Layout from 'components/layout/Layout';
import LoadingSpinner from 'components/loading-spinner/LoadingSpinner';
import Actions from './actions/Actions';
import DateInfo from './date-info/DateInfo';
import OrderModal from './order-modal/OrderModal';
import CalendarModal from './calendar-modal/CalendarModal';
import styles from './Schedule.module.scss';

const Schedule: React.FC = () => {
  const dispatch = useDispatch();

  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState<boolean>(
    false
  );

  const { loading } = useSelector(positionsSelector);

  useEffect(() => {
    dispatch(getAllPositions());
  }, [dispatch]);

  const openOrderModal = () => {
    setIsOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  const openCalendarModal = () => {
    setIsCalendarModalOpen(true);
  };

  const closeCalendarModal = () => {
    setIsCalendarModalOpen(false);
  };

  return (
    <Layout>
      <div className={styles.wrapper}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className={styles.topBar}>
              <Actions
                openOrderModal={openOrderModal}
                openCalendarModal={openCalendarModal}
              />
              <DateInfo />
            </div>

            {isOrderModalOpen && (
              <OrderModal closeOrderModal={closeOrderModal} />
            )}

            {isCalendarModalOpen && (
              <CalendarModal closeCalendarModal={closeCalendarModal} />
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Schedule;
