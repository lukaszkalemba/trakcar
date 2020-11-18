import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { steps } from 'utils/order-wizard-steps';
import { calendarDatesSelector } from 'modules/calendar-dates';
import { positionsSelector, Position } from 'modules/positions';
import { createOrder, CreateOrderValues } from 'modules/orders';
import ModalTemplate, { Wizard } from 'templates/modal-template/ModalTemplate';
import * as Inputs from 'components/inputs/Inputs';
import Button from 'components/button/Button';
import NextStepButton from './next-step-button/NextStepButton';
import {
  getInitialValues,
  getValidationSchema,
  PositionTimeRange,
} from './OrderWizard.form';
import styles from './OrderWizard.module.scss';

const OrderModal: React.FC<OrderModalProps> = ({ closeOrderWizard }) => {
  const dispatch = useDispatch();

  const [currentStep, setCurrentStep] = useState<number>(1);

  const [
    positionTimeRange,
    setPositionTimeRange,
  ] = useState<PositionTimeRange | null>(null);

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

  const validationSchema = getValidationSchema(positionTimeRange);

  return (
    <ModalTemplate wizard={wizard} closeModal={closeOrderWizard}>
      <div className={styles.wrapper}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              {currentStep === 1 && (
                <>
                  <Inputs.Text label="order name" name="orderName" />
                  <Inputs.Text label="car brand" name="carBrand" />
                  <Inputs.Text label="car model" name="carModel" />
                  <Inputs.Text label="principal name" name="principalName" />
                  <NextStepButton setCurrentStep={setCurrentStep} />
                </>
              )}
              {currentStep === 2 && (
                <>
                  <Inputs.PositionSelect
                    label="position"
                    name="positionId"
                    positions={positions}
                    setFieldValue={setFieldValue}
                    setPositionTimeRange={setPositionTimeRange}
                  />
                  <Inputs.Date label="date" name="date" />
                  <Inputs.Time
                    label="start time"
                    name="startTime"
                    step={3600}
                  />
                  <Inputs.Time label="end time" name="endTime" step={3600} />
                  <NextStepButton setCurrentStep={setCurrentStep} />
                </>
              )}
              {currentStep === 3 && (
                <>
                  <Inputs.Select label="highlight color" name="color">
                    <option value="red">red</option>
                    <option value="orange">orange</option>
                    <option value="green">green</option>
                    <option value="violet">violet</option>
                    <option value="blue">blue</option>
                  </Inputs.Select>
                  <Inputs.Number label="cost ( $ )" name="cost" min={0} />
                  <Inputs.Textarea
                    label="description"
                    name="description"
                    rows={5}
                  />
                  <Button type="submit">submit</Button>
                </>
              )}
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
