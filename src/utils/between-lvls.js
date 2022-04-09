export default (x, lvlMin, lvlMax) => {
  if (!lvlMax) return x === lvlMin;
  return x >= lvlMin && x <= lvlMax;
};
