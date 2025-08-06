export const isEmpty = value => {
  return value === null || value === undefined || value === '' || value.toString().trim() === '';
};

export function formatNumberWithCommas(num) {
  return isNaN(num) ? num : num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
