import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteOrder } from 'modules/orders';
import bin_icon from 'assets/svgs/icon_bin-white.svg';
import Icon from 'components/icon/Icon';
import styles from './DeleteButton.module.scss';

const DeleteButton: React.FC<DeleteButtonProps> = ({ positionId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteOrder(positionId, history.push));
  };

  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      <Icon src={bin_icon} />
    </button>
  );
};

interface DeleteButtonProps {
  positionId: string;
}

export default DeleteButton;
