import React from 'react';
import ModalTemplate from 'templates/modal-template/ModalTemplate';

const OrderModal: React.FC<OrderModalProps> = ({ closeOrderModal }) => {
  return (
    <ModalTemplate closeModal={closeOrderModal}>OrderModal.tsx</ModalTemplate>
  );
};

interface OrderModalProps {
  closeOrderModal: () => void;
}

export default OrderModal;
