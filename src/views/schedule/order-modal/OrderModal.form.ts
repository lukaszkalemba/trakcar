import * as yup from 'yup';

export const getInitialValues = (date: string, positionId: string) => ({
  name: '',
  principalName: '',
  carBrand: '',
  carModel: '',
  positionId,
  date,
  startTime: '',
  endTime: '',
  color: 0,
  cost: 100,
  description: '',
});

export const validationSchema = yup.object({
  name: yup
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
  startTime: yup.string().required('Start time of work is required'),
  endTime: yup.string().required('End time of work is required'),
  cost: yup.number().required('Order cost is required'),
  color: yup.number().required('Highlight color is required'),
  description: yup.string().required('Description is required'),
});
