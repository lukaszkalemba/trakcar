import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import ModalTemplate from 'templates/modal-template/ModalTemplate';
import FirstStep from './first-step/FirstStep';
import SecondStep from './second-step/SecondStep';
import ThirdStep from './third-step/ThirdStep';
import { initialValues, validationSchema } from './OrderModal.form';
import styles from './OrderModal.module.scss';

const OrderModal: React.FC<OrderModalProps> = ({ closeOrderModal }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <ModalTemplate className={styles.modal} closeModal={closeOrderModal}>
      <div className={styles.wrapper}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              {currentStep === 1 && (
                <FirstStep setCurrentStep={setCurrentStep} />
              )}
              {currentStep === 2 && (
                <SecondStep setCurrentStep={setCurrentStep} />
              )}
              {currentStep === 3 && <ThirdStep />}
            </Form>
          )}
        </Formik>
      </div>
    </ModalTemplate>
  );
};

interface OrderModalProps {
  closeOrderModal: () => void;
}

export default OrderModal;
