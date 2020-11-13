import * as yup from 'yup';

export const initialValues: any = {
  orderName: '',
  principalName: '',
  carBrand: '',
  carModel: '',
  orderDate: '',
  positionId: '',
  startWorkTime: '',
  endWorkTime: '',
  orderColor: 'red',
  cost: 100,
  description: '',
};

export const validationSchema = yup.object({
  orderName: yup
    .number()
    .min(5, 'Order name must be at least 5 characters')
    .required('Order name is required'),
  principalName: yup
    .string()
    .min(5, 'Principal name must be at least 5 characters')
    .required('Principal name is required'),
  carBrand: yup.string().required('Car brand is required'),
  carModel: yup.string().required('Car model is required'),
  orderDate: yup.string().required('Order date is required'),
  positionId: yup.string().required('Order position is required'),
  startWorkTime: yup.string().required('Start time of work is required'),
  endWorkTime: yup.string().required('End time of work is required'),
  cost: yup.string().required('Order cost is required'),
  orderColor: yup.string().required('Highlight color is required'),
  description: yup.string().required('Description is required'),
});
