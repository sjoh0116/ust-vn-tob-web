export const isEmpty = value => {
  return value === null || value === undefined || value == '' || value == ' ' || value.toString().trim() == '';
};