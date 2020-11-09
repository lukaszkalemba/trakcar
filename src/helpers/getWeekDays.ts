export const getWeekDays = (_: any, date: any) => {
  const weekDay = date.getDay();

  switch (weekDay) {
    case 0:
      return 'N';
    case 1:
      return 'P';
    case 2:
      return 'W';
    case 3:
      return 'Ś';
    case 4:
      return 'C';
    case 5:
      return 'P';
    case 6:
      return 'S';
    default:
      return '-';
  }
};
