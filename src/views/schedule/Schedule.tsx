import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { usersSelector } from 'modules/users';
import { positionsSelector } from 'modules/positions';
import { ordersSelector } from 'modules/orders';
import organization_icon from 'assets/svgs/icon_organization-black.svg';
import car_icon from 'assets/svgs/icon_car-black.svg';
import Seo from 'components/seo/Seo';
import Layout from 'components/layout/Layout';
import LoadingSpinner from 'components/loading-spinner/LoadingSpinner';
import Heading from 'components/heading/Heading';
import Button from 'components/button/Button';
import Actions from './actions/Actions';
import DateInfo from './date-info/DateInfo';
import Timetable from './timetable/Timetable';
import OrderWizard from './order-wizard/OrderWizard';
import CalendarModal from './calendar-modal/CalendarModal';
import styles from './Schedule.module.scss';

const Schedule: React.FC = () => {
  const [isOrderWizardOpen, setIsOrderWizardOpen] = useState<boolean>(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState<boolean>(
    false
  );

  const { user } = useSelector(usersSelector);
  const { positions, loading: positionsLoading } = useSelector(
    positionsSelector
  );
  const { loading: ordersLoading } = useSelector(ordersSelector);

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

  const renderResults = () => {
    if (positionsLoading || ordersLoading) {
      return <LoadingSpinner />;
    }

    if (!user?.organization) {
      return (
        <>
          <Heading className={styles.heading}>
            You have to be a member of an organization to manage orders.
          </Heading>
          <Button type="link" to="/organization" icon={organization_icon}>
            join an organization
          </Button>
        </>
      );
    }

    if (!positions?.length) {
      return (
        <>
          <Heading className={styles.heading}>
            To book orders you have to create position first.
          </Heading>
          <Button type="link" to="/positions" icon={car_icon}>
            addf first position
          </Button>
        </>
      );
    }

    return (
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
    );
  };

  return (
    <>
      <Seo title="schedule" />

      <Layout>
        <div className={styles.wrapper}>{renderResults()}</div>
      </Layout>
    </>
  );
};

export default Schedule;
