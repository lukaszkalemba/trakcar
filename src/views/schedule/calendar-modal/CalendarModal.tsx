import React from 'react';
import ModalTemplate from 'templates/modal-template/ModalTemplate';
import Calendar from 'components/calendar/Calendar';

const CalendarModal: React.FC<CalendarModalProps> = ({
  closeCalendarModal,
}) => {
  return (
    <ModalTemplate calendarModal closeModal={closeCalendarModal}>
      <Calendar modalCalendar closeModal={closeCalendarModal} />
    </ModalTemplate>
  );
};

interface CalendarModalProps {
  closeCalendarModal: () => void;
}

export default CalendarModal;
