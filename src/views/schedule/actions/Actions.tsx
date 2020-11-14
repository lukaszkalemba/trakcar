import React from 'react';
import icon_calendar from 'assets/svgs/icon_calendar-black.svg';
import icon_plus from 'assets/svgs/icon_circle-plus.svg';
import Icon from 'components/icon/Icon';
import Button from 'components/button/Button';
import styles from './Actions.module.scss';

const Actions: React.FC<ActionsProps> = ({
  openOrderWizard,
  openCalendarModal,
}) => {
  return (
    <div className={styles.wrapper}>
      <Button
        className={styles.orderButton}
        icon={icon_plus}
        onClick={openOrderWizard}
      >
        Book order
      </Button>
      <button
        type="button"
        className={styles.calendarButton}
        onClick={openCalendarModal}
      >
        <Icon src={icon_calendar} />
      </button>
    </div>
  );
};

interface ActionsProps {
  openOrderWizard: () => void;
  openCalendarModal: () => void;
}

export default Actions;
