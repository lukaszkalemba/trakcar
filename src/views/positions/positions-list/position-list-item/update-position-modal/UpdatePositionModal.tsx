import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import {
  CreatePositionValues,
  updatePosition,
  PositionData,
} from 'modules/positions';
import { showAlert } from 'modules/alerts';
import arrow_right_icon from 'assets/svgs/icon_arrow-right-black.svg';
import * as Inputs from 'components/inputs/Inputs';
import Button from 'components/button/Button';
import ModalTemplate from 'templates/modal-template/ModalTemplate';
import {
  getInitialValues,
  validationSchema,
} from './UpdatePositionModal.formik';

const UpdatePositionModal: React.FC<UpdatePositionModalProps> = ({
  position,
  closeModal,
}) => {
  const dispatch = useDispatch();

  const initialValues = getInitialValues(position);

  const handleSubmit = ({ name, startTime, endTime }: CreatePositionValues) => {
    let areEqual = false;

    if (
      name === initialValues.name &&
      startTime === initialValues.startTime &&
      endTime === initialValues.endTime
    ) {
      areEqual = true;
    }

    if (areEqual) {
      dispatch(
        showAlert({
          message: 'You must change anything to update position',
          alertType: 'error',
          timeout: 3250,
        })
      );

      return;
    }

    dispatch(
      updatePosition({ id: position._id, name, startTime, endTime }, closeModal)
    );
  };

  return (
    <ModalTemplate closeModal={closeModal}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Inputs.Text label="name" name="name" />
            <Inputs.Time label="start time" name="startTime" step={3600} />
            <Inputs.Time label="end time" name="endTime" step={3600} />
            <Button type="submit" icon={arrow_right_icon}>
              update
            </Button>
          </Form>
        )}
      </Formik>
    </ModalTemplate>
  );
};

interface UpdatePositionModalProps {
  position: PositionData;
  closeModal: () => void;
}

export default UpdatePositionModal;
