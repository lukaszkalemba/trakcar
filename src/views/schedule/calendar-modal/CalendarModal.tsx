import React from 'react';
import ModalTemplate from 'templates/modal-template/ModalTemplate';
import Calendar from 'components/calendar/Calendar';
import styles from './CalendarModal.module.scss';

const CalendarModal: React.FC<CalendarModalProps> = ({
  closeCalendarModal,
}) => {
  return (
    <ModalTemplate className={styles.modal} closeModal={closeCalendarModal}>
      <Calendar closeModal={closeCalendarModal} />
    </ModalTemplate>
  );
};

interface CalendarModalProps {
  closeCalendarModal: () => void;
}

export default CalendarModal;
