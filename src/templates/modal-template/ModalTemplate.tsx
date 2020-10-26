import React, { ReactNode } from 'react';
import close_icon from 'assets/svgs/icon_close.svg';
import Icon from 'components/icon/Icon';
import styles from './ModalTemplate.module.scss';

const ModalTemplate: React.FC<ModalTemplateProps> = ({
  closeModal,
  children,
}) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.board}>
        <button className={styles.closeButton} onClick={closeModal}>
          <Icon src={close_icon} />
        </button>
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
