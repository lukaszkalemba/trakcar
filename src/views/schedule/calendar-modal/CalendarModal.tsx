import React from 'react';
import ModalTemplate from 'templates/modal-template/ModalTemplate';

const CalendarModal: React.FC<CalendarModalProps> = ({
  closeCalendarModal,
}) => {
  return (
    <ModalTemplate closeModal={closeCalendarModal}>
      CalendarModal.tsx
    </ModalTemplate>
  );
};

interface CalendarModalProps {
  closeCalendarModal: () => void;
}

export default CalendarModal;
