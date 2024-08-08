export const isEmpty = value => {
  return value === null || value === undefined || value === '' || value.toString().trim() === '';
};