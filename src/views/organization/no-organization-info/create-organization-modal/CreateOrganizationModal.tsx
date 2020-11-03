import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import {
  createOrganization,
  CreateOrganizationValues,
} from 'modules/organizations';
import { showAlert } from 'modules/alerts';
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
  const dispatch = useDispatch();

  const handleSubmit = (values: CreateOrganizationValues) => {
    dispatch(createOrganization(values));
    dispatch(
      showAlert({
        message: 'Organization created',
        alertType: 'success',
      })
    );
    closeModal();
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
            <TextInput label="organization name" name="name" type="text" />
            <TextInput
              label="access code"
              name="accessCode"
              type="password"
              maxLength={4}
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

interface CreateOrganizationModalProps {
  closeModal: () => void;
}

export default CreateOrganizationModal;
