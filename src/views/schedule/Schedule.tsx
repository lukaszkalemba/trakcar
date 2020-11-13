import React, { useState } from 'react';
import Layout from 'components/layout/Layout';
import Actions from './actions/Actions';
import DateInfo from './date-info/DateInfo';
import OrderModal from './order-modal/OrderModal';
import CalendarModal from './calendar-modal/CalendarModal';
import styles from './Schedule.module.scss';

const Schedule: React.FC = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState<boolean>(
    false
  );

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
        <div className={styles.topBar}>
          <Actions
            openOrderModal={openOrderModal}
            openCalendarModal={openCalendarModal}
          />
          <DateInfo />
        </div>

        {isOrderModalOpen && <OrderModal closeOrderModal={closeOrderModal} />}

        {isCalendarModalOpen && (
          <CalendarModal closeCalendarModal={closeCalendarModal} />
        )}
      </div>
    </Layout>
  );
};

export default Schedule;
