import * as yup from 'yup';
import { CreatePositionValues } from 'modules/positions';

export const initialValues: CreatePositionValues = {
  positionName: '',
  startTime: '',
  endTime: '',
};

export const validationSchema = yup.object({
  positionName: yup.string().required('Position name is required'),
  startTime: yup
    .string()
    .matches(
      /^([0-1][0-9]|2[0-3]):00$/,
      'Start time of work have to be full hour'
    )
    .required('Start time is required'),
  endTime: yup
    .string()
    .matches(
      /^([0-1][0-9]|2[0-3]):00$/,
      'End time of work have to be full hour'
    )
    .required('Start time is required')
    .when('startTime', (startTime: string, schema: any) => {
      if (startTime) {
        const comparedStartTime = parseInt(
          (startTime as string).substring(0, 2),
          10
        );

        return schema.test(
          'is-end-time-later',
          'End time have to be later than start time',
          (value: string) => {
            if (value) {
              const comparedEndTime = parseInt(
                (value as string).substring(0, 2),
                10
              );

              return comparedEndTime > comparedStartTime;
            }

            return true;
          }
        );
      }

      return schema;
    }),
});
