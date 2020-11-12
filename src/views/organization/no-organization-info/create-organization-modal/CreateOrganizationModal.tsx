import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import {
  createOrganization,
  CreateOrganizationValues,
} from 'modules/organizations';
import arrow_right_icon from 'assets/svgs/icon_arrow-right-black.svg';
import ModalTemplate from 'templates/modal-template/ModalTemplate';
import * as Inputs from 'components/inputs/Inputs';
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
    dispatch(createOrganization(values, closeModal));
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
            <Inputs.Text label="organization name" name="organizationName" />
            <Inputs.Text label="access code" name="accessCode" maxLength={4} />
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
