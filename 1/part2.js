const getPair = require('./star1');
const getArrayMultiplication = require('./getArrayMultiplication');
const input = require('./input');

const getTriple = (list, sum) => {
  const dict = {};
  list.forEach(num => dict[num] = true);

  for (let i = 0; i < list.length; i++) {
    const current = list[i];
    const pair = getPair(list, sum - current);

    if (pair) {
      return [current, ...pair];
    }
  }
  return false;
}

const res = getArrayMultiplication(getTriple(input, 2020));
console.log(res);