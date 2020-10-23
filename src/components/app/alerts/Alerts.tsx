import React from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { alertsSelector } from 'modules/alerts';
import styles from './Alerts.module.scss';

const Alerts: Function = (): JSX.Element[] => {
  const alerts = useSelector(alertsSelector);

  return alerts.map((alert) => {
    const alertClass = cx(styles.alert, {
      [styles.success]: alert.alertType === 'success',
      [styles.error]: alert.alertType === 'error',
    });

    return (
      <div key={alert.id} className={alertClass}>
        {alert.message}
      </div>
    );
  });
};

export default Alerts;
