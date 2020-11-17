import React from 'react';
import bin_icon from 'assets/svgs/icon_bin-white.svg';
import Icon from 'components/icon/Icon';
import styles from './DeleteButton.module.scss';

const DeleteButton: React.FC<DeleteButtonProps> = ({ positionId }) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => console.log(positionId)}
    >
      <Icon src={bin_icon} />
    </button>
  );
};

interface DeleteButtonProps {
  positionId: string;
}

export default DeleteButton;
