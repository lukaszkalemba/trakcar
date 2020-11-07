import React from 'react';
import { useDispatch } from 'react-redux';
import delete_icon from 'assets/svgs/icon_delete-black.svg';
import edit_icon from 'assets/svgs/icon_edit.svg';
import { deletePosition } from 'modules/positions';
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
        <Icon src={edit_icon} />
      </button>

      <button onClick={handleDeleteButtonClick}>
        <Icon src={delete_icon} />
      </button>
    </div>
  );
};

interface ButtonsProps {
  positionId: string;
  setIsUpdateModalOpen: (state: boolean) => void;
}

export default Buttons;
