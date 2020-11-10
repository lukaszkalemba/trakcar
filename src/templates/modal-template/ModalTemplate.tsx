import React, { ReactNode } from 'react';
import cx from 'classnames';
import CloseButton from './close-button/CloseButton';
import styles from './ModalTemplate.module.scss';

const ModalTemplate: React.FC<ModalTemplateProps> = ({
  closeModal,
  calendarModal,
  children,
}) => {
  const boardClass = cx(styles.board, {
    [styles.calendarBoard]: calendarModal,
  });

  return (
    <div className={styles.backdrop}>
      <div className={boardClass}>
        <CloseButton closeModal={closeModal} />
        {children}
      </div>
    </div>
  );
};

interface ModalTemplateProps {
  closeModal: () => void;
  calendarModal?: boolean;
  children: ReactNode;
}

export default ModalTemplate;
