export { default as betweenLvls } from '@/utils/between-lvls';
export const pad = function (number, size = 2) {
  const s = '000000000' + number;
  return s.substr(s.length - size);
};
export const niceNumber = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
export const niceFloat = (number) => {
  return number.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
};
