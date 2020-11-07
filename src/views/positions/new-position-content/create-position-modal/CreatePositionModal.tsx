import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { CreatePositionValues, createPosition } from 'modules/positions';
import ModalTemplate from 'templates/modal-template/ModalTemplate';
import TextInput from 'components/text-input/TextInput';
import Button from 'components/button/Button';
import arrow_right_icon from 'assets/svgs/icon_arrow-right.svg';
import { initialValues, validationSchema } from './CreatePositionModal.formik';

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
            <TextInput label="name" name="name" type="text" />
            <TextInput
              label="start time"
              name="startTime"
              step={3600}
              type="time"
            />
            <TextInput
              label="end time"
              name="endTime"
              step={3600}
              type="time"
            />
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
