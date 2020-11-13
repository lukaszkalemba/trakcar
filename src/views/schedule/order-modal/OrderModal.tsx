import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';
import { calendarDatesSelector } from 'modules/calendar-dates';
import { positionsSelector, Position } from 'modules/positions';
import ModalTemplate from 'templates/modal-template/ModalTemplate';
import FirstStep from './first-step/FirstStep';
import SecondStep from './second-step/SecondStep';
import ThirdStep from './third-step/ThirdStep';
import { getInitialValues, validationSchema } from './OrderModal.form';
import styles from './OrderModal.module.scss';

const OrderModal: React.FC<OrderModalProps> = ({ closeOrderModal }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const { selectedDate } = useSelector(calendarDatesSelector);
  const { positions } = useSelector(positionsSelector);

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const initialValues = getInitialValues(
    selectedDate,
    (positions as Position[])[0]._id
  );

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
