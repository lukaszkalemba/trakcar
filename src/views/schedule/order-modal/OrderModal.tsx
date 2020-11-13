import React, { useState } from 'react';
import ModalTemplate from 'templates/modal-template/ModalTemplate';
import FirstStep from './first-step/FirstStep';
import SecondStep from './second-step/SecondStep';
import ThirdStep from './third-step/ThirdStep';

const OrderModal: React.FC<OrderModalProps> = ({ closeOrderModal }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <>
      <ModalTemplate closeModal={closeOrderModal}>
        {currentStep === 1 && <FirstStep setCurrentStep={setCurrentStep} />}
        {currentStep === 2 && <SecondStep setCurrentStep={setCurrentStep} />}
        {currentStep === 3 && <ThirdStep />}
      </ModalTemplate>
    </>
  );
};

interface OrderModalProps {
  closeOrderModal: () => void;
}

export default OrderModal;
