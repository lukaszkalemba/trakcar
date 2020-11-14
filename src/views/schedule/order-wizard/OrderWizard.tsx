import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { steps } from 'utils/order-wizard-steps';
import { calendarDatesSelector } from 'modules/calendar-dates';
import { positionsSelector, Position } from 'modules/positions';
import { createOrder, CreateOrderValues } from 'modules/orders';
import ModalTemplate, { Wizard } from 'templates/modal-template/ModalTemplate';
import FirstStep from './first-step/FirstStep';
import SecondStep from './second-step/SecondStep';
import ThirdStep from './third-step/ThirdStep';
import { getInitialValues, validationSchema } from './OrderWizard.form';
import styles from './OrderWizard.module.scss';

const OrderModal: React.FC<OrderModalProps> = ({ closeOrderWizard }) => {
  const dispatch = useDispatch();

  const [currentStep, setCurrentStep] = useState<number>(1);

  const { selectedDate } = useSelector(calendarDatesSelector);
  const { positions } = useSelector(positionsSelector);

  const handleSubmit = (values: CreateOrderValues) => {
    dispatch(createOrder(values, closeOrderWizard));
  };

  const initialValues = getInitialValues(
    selectedDate,
    (positions as Position[])[0]._id
  );

  const wizard: Wizard = {
    currentStep,
    setCurrentStep,
    steps,
  };

  return (
    <ModalTemplate
      className={styles.wizard}
      wizard={wizard}
      closeModal={closeOrderWizard}
    >
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
  closeOrderWizard: () => void;
}

export default OrderModal;
