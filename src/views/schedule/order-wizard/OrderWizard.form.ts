import * as yup from 'yup';

export const getInitialValues = (date: string, positionId: string) => ({
  orderName: '',
  principalName: '',
  carBrand: '',
  carModel: '',
  positionId,
  date,
  startTime: '',
  endTime: '',
  color: 'red',
  cost: 100,
  description: '',
});

export const validationSchema = yup.object({
  orderName: yup
    .string()
    .min(5, 'Order name must be at least 5 characters')
    .required('Order name is required'),
  principalName: yup
    .string()
    .min(5, 'Principal name must be at least 5 characters')
    .required('Principal name is required'),
  carBrand: yup.string().required('Car brand is required'),
  carModel: yup.string().required('Car model is required'),
  date: yup.string().required('Order date is required'),
  positionId: yup.string().required('Order position is required'),
  startTime: yup
    .string()
    .matches(
      /^([0-1][0-9]|2[0-3]):00$/,
      'Start time of the order have to be full hour'
    )
    .required('Start time of work is required'),
  endTime: yup
    .string()
    .matches(
      /^([0-1][0-9]|2[0-3]):00$/,
      'End time of the order have to be full hour'
    )
    .required('End time of work is required'),
  cost: yup.number().required('Order cost is required'),
  color: yup.string().required('Distinctive color is required'),
  description: yup.string().required('Description is required'),
});
