export const getWeekDays = (_: any, date: Date) => {
  const weekDay = date.getDay();

  switch (weekDay) {
    case 0:
      return 'U';
    case 1:
      return 'M';
    case 2:
      return 'T';
    case 3:
      return 'W';
    case 4:
      return 'R';
    case 5:
      return 'F';
    case 6:
      return 'S';
    default:
      return '-';
  }
};
