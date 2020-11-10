import * as yup from 'yup';
import { CreateOrganizationValues } from 'modules/organizations';

export const initialValues: CreateOrganizationValues = {
  organizationName: '',
  accessCode: '',
};

export const validationSchema = yup.object({
  organizationName: yup.string().required('Organization name is required'),
  accessCode: yup
    .string()
    .matches(/^[0-9]+$/, 'Access code can only contain numbers')
    .min(4, 'Access code must be exactly 4 digits')
    .required('Access code  is required'),
});
