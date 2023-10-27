export const isEndDateValid = (
  startDate: string,
  endDate: string
): boolean => {
  return new Date(startDate) <= new Date(endDate);
};
