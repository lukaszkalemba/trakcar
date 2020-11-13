import React, { ReactNode } from 'react';
import cx from 'classnames';
import CloseButton from './close-button/CloseButton';
import styles from './ModalTemplate.module.scss';

const ModalTemplate: React.FC<ModalTemplateProps> = ({
  closeModal,
  className,
  children,
}) => {
  return (
    <div className={styles.backdrop}>
      <div className={cx(styles.board, className)}>
        <CloseButton closeModal={closeModal} />
        {children}
      </div>
    </div>
  );
};

interface ModalTemplateProps {
  closeModal: () => void;
  className?: string;
  children: ReactNode;
}

export default ModalTemplate;
