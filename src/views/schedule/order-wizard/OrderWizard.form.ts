import * as yup from 'yup';

export interface PositionTimeRange {
  startTime?: string;
  endTime?: string;
}

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

export const getValidationSchema = (
  positionTimeRange: PositionTimeRange | null
) => [
  yup.object({
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
  }),

  yup.object({
    date: yup.string().required('Order date is required'),
    positionId: yup.string().required('Order position is required'),
    startTime: yup
      .string()
      .matches(
        /^([0-1][0-9]|2[0-3]):00$/,
        'Start time of the order have to be full hour'
      )
      .test(
        'is-start-time-within-range',
        'This hour is not within position range',
        (value) => {
          if (value) {
            const comparedValue = parseInt(
              (value as string).substring(0, 2),
              10
            );

            const comparedPositionStartTime = parseInt(
              (positionTimeRange?.startTime as string).substring(0, 2),
              10
            );

            const comparedPositionEndTime = parseInt(
              (positionTimeRange?.endTime as string).substring(0, 2),
              10
            );

            return (
              comparedValue >= comparedPositionStartTime &&
              comparedValue <= comparedPositionEndTime
            );
          }

          return true;
        }
      )
      .required('Start time of work is required'),
    endTime: yup
      .string()
      .matches(
        /^([0-1][0-9]|2[0-3]):00$/,
        'End time of the order have to be full hour'
      )
      .test(
        'is-end-time-within-range',
        'This hour is not within position range',
        (value) => {
          if (value) {
            const comparedValue = parseInt(
              (value as string).substring(0, 2),
              10
            );

            const comparedPositionStartTime = parseInt(
              (positionTimeRange?.startTime as string).substring(0, 2),
              10
            );

            const comparedPositionEndTime = parseInt(
              (positionTimeRange?.endTime as string).substring(0, 2),
              10
            );

            return (
              comparedValue >= comparedPositionStartTime &&
              comparedValue <= comparedPositionEndTime
            );
          }

          return true;
        }
      )
      .required('End time of work is required')
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
  }),
  yup.object({
    cost: yup.number().required('Order cost is required'),
    color: yup.string().required('Distinctive color is required'),
    description: yup.string().required('Description is required'),
  }),
];
