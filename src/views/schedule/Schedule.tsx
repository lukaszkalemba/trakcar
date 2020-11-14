import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPositions, positionsSelector } from 'modules/positions';
import { getAllOrders, ordersSelector } from 'modules/orders';
import Layout from 'components/layout/Layout';
import LoadingSpinner from 'components/loading-spinner/LoadingSpinner';
import Actions from './actions/Actions';
import DateInfo from './date-info/DateInfo';
import Timetable from './timetable/Timetable';
import OrderWizard from './order-wizard/OrderWizard';
import CalendarModal from './calendar-modal/CalendarModal';
import styles from './Schedule.module.scss';

const Schedule: React.FC = () => {
  const dispatch = useDispatch();

  const [isOrderWizardOpen, setIsOrderWizardOpen] = useState<boolean>(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState<boolean>(
    false
  );

  const { loading: positionsLoading } = useSelector(positionsSelector);
  const { loading: ordersLoading } = useSelector(ordersSelector);

  useEffect(() => {
    dispatch(getAllPositions());
    dispatch(getAllOrders());
  }, [dispatch]);

  const openOrderWizard = () => {
    setIsOrderWizardOpen(true);
  };

  const closeOrderWizard = () => {
    setIsOrderWizardOpen(false);
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
        {positionsLoading || ordersLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className={styles.topBar}>
              <Actions
                openOrderWizard={openOrderWizard}
                openCalendarModal={openCalendarModal}
              />
              <DateInfo />
            </div>
            <Timetable />

            {isOrderWizardOpen && (
              <OrderWizard closeOrderWizard={closeOrderWizard} />
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
