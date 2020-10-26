import React, { ReactNode } from 'react';
import styles from './ModalTemplate.module.scss';

const ModalTemplate: React.FC<ModalTemplateProps> = ({
  closeModal,
  children,
}) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.board}>
        <button onClick={closeModal}>close modal</button>
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
