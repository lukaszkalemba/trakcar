import * as yup from 'yup';
import { Position } from 'modules/positions';

export const getInitialValues = (position: Position) => ({
  positionName: position.positionName,
  startTime: position.startTime,
  endTime: position.endTime,
});

export const validationSchema = yup.object({
  positionName: yup.string().required('Position name is required'),
  startTime: yup
    .string()
    .matches(
      /^([0-1][0-9]|2[0-3]):00$/,
      'Start time must contain valid time value'
    )
    .required('Start time is required'),
  endTime: yup
    .string()
    .matches(
      /^([0-1][0-9]|2[0-3]):00$/,
      'End time must contain valid time value'
    )
    .required('Start time is required'),
});
