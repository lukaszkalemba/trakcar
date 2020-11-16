import React from 'react';
import { useSelector } from 'react-redux';
import { alertsSelector } from 'modules/alerts';
import Alert from './alert/Alert';
import styles from './Alerts.module.scss';

const Alerts: React.FC = () => {
  const alerts = useSelector(alertsSelector);

  return (
    <div className={styles.alerts}>
      {alerts.map(({ id, message, alertType }, index) =>
        index >= 3 ? null : (
          <Alert key={id} message={message} alertType={alertType} />
        )
      )}
    </div>
  );
};

export default Alerts;
