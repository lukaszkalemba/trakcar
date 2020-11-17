import { Position } from 'modules/positions';

export const getTimetableHours = (positions: Position[] | null) => {
  let timetableStartHour = (positions as Position[])[0].startTime;
  let timetableEndHour = (positions as Position[])[0].endTime;

  interface TimeRange {
    startTime: string;
    endTime: string;
  }

  (positions as Position[]).forEach(({ startTime, endTime }: TimeRange) => {
    if (startTime < timetableStartHour) {
      timetableStartHour = startTime;
    }

    if (endTime > timetableEndHour) {
      timetableEndHour = endTime;
    }
  });

  const startHourNum = parseInt(timetableStartHour.substring(0, 2), 10);
  const endHourNum = parseInt(timetableEndHour.substring(0, 2), 10);

  const timetableHours = [];

  for (let i = startHourNum; i < endHourNum; i += 1) {
    if (i < 10) {
      timetableHours.push(`0${i}:00`);
    } else {
      timetableHours.push(`${i}:00`);
    }
  }

  return timetableHours;
};
