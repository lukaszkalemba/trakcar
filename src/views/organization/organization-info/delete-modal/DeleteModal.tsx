import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteOrganization } from 'modules/organizations';
import Heading from 'components/heading/Heading';
import ModalTemplate from 'templates/modal-template/ModalTemplate';
import DeleteButton from '../delete-button/DeleteButton';
import styles from './DeleteModal.module.scss';

const DeleteModal: React.FC<DeleteModalProps> = ({
  closeModal,
  organizationId,
  organizationName,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteOrganization(organizationId as string));
  };

  return (
    <ModalTemplate closeModal={closeModal}>
      <Heading>
        Are you sure?
        <br />
        This operation
        <br />
        cannot be undone.
      </Heading>

      <DeleteButton onClick={handleClick} className={styles.button}>
        delete {organizationName}
      </DeleteButton>
    </ModalTemplate>
  );
};

interface DeleteModalProps {
  closeModal: () => void;
  organizationId?: string;
  organizationName?: string;
}

export default DeleteModal;
