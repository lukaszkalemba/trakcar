import * as yup from 'yup';
import { JoinOrganizationValues } from 'modules/organizations';

export const initialValues: JoinOrganizationValues = {
  accessCode: '',
};

export const validationSchema = yup.object({
  accessCode: yup
    .string()
    .matches(/^[0-9]+$/, 'Access code can only contain numbers')
    .min(4, 'Access code must be exactly 4 digits')
    .required('Access code  is required'),
});
