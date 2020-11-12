import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { deleteOrganization } from 'modules/organizations';
import bin_icon from 'assets/svgs/icon_bin-red.svg';
import Button from 'components/button/Button';
import styles from './DeleteButton.module.scss';

const DeleteButton: React.FC<DeleteButtonProps> = ({
  children,
  organizationId,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteOrganization(organizationId as string));
  };

  return (
    <Button className={styles.button} icon={bin_icon} onClick={handleClick}>
      {children}
    </Button>
  );
};

interface DeleteButtonProps {
  children: ReactNode;
  organizationId?: string;
}

export default DeleteButton;
