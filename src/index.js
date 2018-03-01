module.exports = function getresultsCount(number, base) {

  let result = number, baseSystem = base, power, k, count;

  for (let i = 2; i <= base; i++) {
      if (baseSystem % i === 0) {
          power = 0;
          while (baseSystem % i === 0) {
              power++;
              baseSystem = parseInt(baseSystem / i);
          }
          count = 0;
          k = number;
          do {
              count += parseInt(k / i);
              k = parseInt(k / i);
          } while (k != 0);
          result = Math.min(result, parseInt(count / power));
      }
  }
  return result;
}