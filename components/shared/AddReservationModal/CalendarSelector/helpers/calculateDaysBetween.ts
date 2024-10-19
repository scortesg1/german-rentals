export const calculateDaysBetween = (from: Date, to: Date): number => {
  const oneDay = 24 * 60 * 60 * 1000;
  const timeDifference = to.getTime() - from.getTime();

  return Math.round(timeDifference / oneDay);
};
