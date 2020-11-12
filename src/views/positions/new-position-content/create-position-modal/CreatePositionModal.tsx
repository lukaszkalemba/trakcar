import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { CreatePositionValues, createPosition } from 'modules/positions';
import arrow_right_icon from 'assets/svgs/icon_arrow-right-black.svg';
import ModalTemplate from 'templates/modal-template/ModalTemplate';
import * as Inputs from 'components/inputs/Inputs';
import Button from 'components/button/Button';
import { initialValues, validationSchema } from './CreatePositionModal.form';

const CreatePositionModal: React.FC<CreatePositionModalProps> = ({
  closeModal,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = (values: CreatePositionValues) => {
    dispatch(createPosition(values, closeModal));
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
              create
            </Button>
          </Form>
        )}
      </Formik>
    </ModalTemplate>
  );
};

interface CreatePositionModalProps {
  closeModal: () => void;
}

export default CreatePositionModal;
