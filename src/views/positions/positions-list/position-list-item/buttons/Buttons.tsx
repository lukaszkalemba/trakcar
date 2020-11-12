import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePosition } from 'modules/positions';
import bin_icon from 'assets/svgs/icon_bin-black.svg';
import pencil_icon from 'assets/svgs/icon_pencil.svg';
import Icon from 'components/icon/Icon';
import styles from './Buttons.module.scss';

const Buttons: React.FC<ButtonsProps> = ({
  positionId,
  setIsUpdateModalOpen,
}) => {
  const dispatch = useDispatch();

  const handleDeleteButtonClick = () => {
    dispatch(deletePosition(positionId));
  };

  const handleUpdateButtonClick = () => {
    setIsUpdateModalOpen(true);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handleUpdateButtonClick}>
        <Icon src={pencil_icon} />
      </button>

      <button onClick={handleDeleteButtonClick}>
        <Icon src={bin_icon} />
      </button>
    </div>
  );
};

interface ButtonsProps {
  positionId: string;
  setIsUpdateModalOpen: (state: boolean) => void;
}

export default Buttons;
