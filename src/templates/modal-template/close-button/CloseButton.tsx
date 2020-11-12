import React from 'react';
import cancellation_icon from 'assets/svgs/icon_cancellation.svg';
import Icon from 'components/icon/Icon';
import styles from './CloseButton.module.scss';

const CloseButton: React.FC<CloseButtonProps> = ({ closeModal }) => {
  return (
    <button className={styles.button} onClick={closeModal}>
      <Icon src={cancellation_icon} />
    </button>
  );
};

interface CloseButtonProps {
  closeModal: () => void;
}

export default CloseButton;
