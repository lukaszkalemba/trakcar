import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usersSelector } from 'modules/users';
import { positionsSelector } from 'modules/positions';
import { ordersSelector } from 'modules/orders';
import calendar_icon from 'assets/svgs/icon_calendar-black.svg';
import plus_icon from 'assets/svgs/icon_circle-plus.svg';
import car_icon from 'assets/svgs/icon_car-black.svg';
import organization_icon from 'assets/svgs/icon_organization-black.svg';
import LoadingSpinner from 'components/loading-spinner/LoadingSpinner';
import Icon from 'components/icon/Icon';
import Calendar from 'components/calendar/Calendar';
import ViewLink from './view-link/ViewLink';
import styles from './DesktopAside.module.scss';

const DesktopAside: React.FC = () => {
  const { location } = useHistory();

  const { user, loading: userLoading } = useSelector(usersSelector);
  const { positions, loading: positionsLoading } = useSelector(
    positionsSelector
  );
  const { orders, loading: ordersLoading } = useSelector(ordersSelector);

  const renderResults = () => {
    if (location.pathname === '/404') {
      return (
        <ViewLink to="/" icon={calendar_icon}>
          Back home
        </ViewLink>
      );
    }

    if (userLoading || positionsLoading || ordersLoading) {
      return <LoadingSpinner className={styles.loadingSpinner} />;
    }

    if (!user?.organization && location.pathname !== '/organization') {
      return (
        <ViewLink to="/organization" icon={organization_icon}>
          Join an organization
        </ViewLink>
      );
    }

    if (!user?.organization && location.pathname === '/organization') {
      return <Icon className={styles.icon} src={organization_icon} />;
    }

    if (!positions?.length && location.pathname !== '/positions') {
      return (
        <ViewLink to="/positions" icon={car_icon}>
          Add first position
        </ViewLink>
      );
    }

    if (!positions?.length && location.pathname === '/positions') {
      return <Icon className={styles.icon} src={car_icon} />;
    }

    if (!orders?.length && location.pathname !== '/') {
      return (
        <ViewLink to="/" icon={plus_icon}>
          Book first order
        </ViewLink>
      );
    }

    if (orders?.length && location.pathname !== '/') {
      return (
        <ViewLink to="/" icon={plus_icon}>
          Book new order
        </ViewLink>
      );
    }

    return <Calendar />;
  };

  return <aside className={styles.wrapper}>{renderResults()}</aside>;
};

export default DesktopAside;
