import React from 'react';
import { Formik, Form } from 'formik';
import arrow_right_icon from 'assets/svgs/icon_arrow-right.svg';
import ModalTemplate from 'templates/modal-template/ModalTemplate';
import TextInput from 'components/text-input/TextInput';
import Button from 'components/button/Button';
import {
  initialValues,
  validationSchema,
} from './CreateOrganizationModal.formik';

const CreateOrganizationModal: React.FC<CreateOrganizationModalProps> = ({
  closeModal,
}) => {
  const handleSubmit = (values: any) => {
    console.log(values);
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
            <TextInput
              label="organization name"
              name="organizationName"
              type="text"
            />
            <TextInput label="access code" name="accessCode" type="password" />
            <Button type="submit" icon={arrow_right_icon}>
              create
            </Button>
          </Form>
        )}
      </Formik>
    </ModalTemplate>
  );
};

interface CreateOrganizationModalProps {
  closeModal: () => void;
}

export default CreateOrganizationModal;
