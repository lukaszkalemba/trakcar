export const generateGridRow = (time: string) =>
  `H${time.substring(0, 2).replace(':', '')}`;
