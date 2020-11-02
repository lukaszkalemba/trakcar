import React from 'react';
import delete_icon from 'assets/svgs/icon_delete-black.svg';
import edit_icon from 'assets/svgs/icon_edit.svg';
import Icon from 'components/icon/Icon';
import styles from './Buttons.module.scss';

const Buttons: React.FC<ButtonsProps> = ({ positionId }) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={() => console.log(positionId)}>
        <Icon src={edit_icon} />
      </button>
      <button onClick={() => console.log(positionId)}>
        <Icon src={delete_icon} />
      </button>
    </div>
  );
};

interface ButtonsProps {
  positionId: string;
}

export default Buttons;
