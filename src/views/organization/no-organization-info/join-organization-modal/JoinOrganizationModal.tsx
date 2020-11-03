import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import {
  joinOrganization,
  JoinOrganizationValues,
} from 'modules/organizations';
import { showAlert } from 'modules/alerts';
import arrow_right_icon from 'assets/svgs/icon_arrow-right.svg';
import TextInput from 'components/text-input/TextInput';
import Button from 'components/button/Button';
import ModalTemplate from 'templates/modal-template/ModalTemplate';
import {
  initialValues,
  validationSchema,
} from './JoinOrganizationModal.formik';

const JoinOrganizationModal: React.FC<JoinOrganizationModalProps> = ({
  closeModal,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = (values: JoinOrganizationValues) => {
    dispatch(joinOrganization(values));
    dispatch(
      showAlert({
        message: 'Organization joined',
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
            <TextInput
              label="access code"
              name="accessCode"
              type="password"
              maxLength={4}
            />
            <Button type="submit" icon={arrow_right_icon}>
              join
            </Button>
          </Form>
        )}
      </Formik>
    </ModalTemplate>
  );
};

interface JoinOrganizationModalProps {
  closeModal: () => void;
}

export default JoinOrganizationModal;
