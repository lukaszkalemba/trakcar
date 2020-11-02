import React, { ReactNode } from 'react';
import styles from './ModalTemplate.module.scss';
import CloseButton from './close-button/CloseButton';

const ModalTemplate: React.FC<ModalTemplateProps> = ({
  closeModal,
  children,
}) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.board}>
        <CloseButton closeModal={closeModal} />
        {children}
      </div>
    </div>
  );
};

interface ModalTemplateProps {
  closeModal: () => void;
  children: ReactNode;
}

export default ModalTemplate;
