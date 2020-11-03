import React from 'react';
import { Formik, Form } from 'formik';
import arrow_right_icon from 'assets/svgs/icon_arrow-right.svg';
import { PositionData } from 'modules/positions';
import TextInput from 'components/text-input/TextInput';
import Button from 'components/button/Button';
import ModalTemplate from 'templates/modal-template/ModalTemplate';
import { getInitialValues, validationSchema } from './EditPositionModal.formik';

const EditPositionModal: React.FC<EditPositionModalProps> = ({
  position,
  closeModal,
}) => {
  const handleSubmit = (values: any) => {
    console.log(position._id);
    console.log(values);
  };

  return (
    <ModalTemplate closeModal={closeModal}>
      <Formik
        initialValues={getInitialValues(position)}
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
              update
            </Button>
          </Form>
        )}
      </Formik>
    </ModalTemplate>
  );
};

interface EditPositionModalProps {
  position: PositionData;
  closeModal: () => void;
}

export default EditPositionModal;
