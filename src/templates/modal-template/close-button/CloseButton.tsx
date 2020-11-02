import React from 'react';
import close_icon from 'assets/svgs/icon_close.svg';
import Icon from 'components/icon/Icon';
import styles from './CloseButton.module.scss';

const CloseButton: React.FC<CloseButtonProps> = ({ closeModal }) => {
  return (
    <button className={styles.button} onClick={closeModal}>
      <Icon src={close_icon} />
    </button>
  );
};

interface CloseButtonProps {
  closeModal: () => void;
}

export default CloseButton;
