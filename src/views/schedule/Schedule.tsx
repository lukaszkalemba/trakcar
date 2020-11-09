import React, { useState } from 'react';
import Layout from 'components/layout/Layout';
import Actions from './actions/Actions';
import CalendarModal from './calendar-modal/CalendarModal';
import styles from './Schedule.module.scss';

const Schedule: React.FC = () => {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);

  const openCalendarModal = () => {
    setIsCalendarModalOpen(true);
  };

  const closeCalendarModal = () => {
    setIsCalendarModalOpen(false);
  };

  return (
    <Layout>
      <div className={styles.wrapper}>
        <Actions openCalendarModal={openCalendarModal} />

        {isCalendarModalOpen && (
          <CalendarModal closeCalendarModal={closeCalendarModal} />
        )}
      </div>
    </Layout>
  );
};

export default Schedule;
