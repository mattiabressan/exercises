const numbers = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

const findOptimum = fn => arr => arr.reduce(fn)

const findMaximum = findOptimum((x, y) => (x > y ? x : y));
const findMinimum = findOptimum((x, y) => (x < y ? x : y));

const max = findMaximum(numbers)
const min = findMinimum(numbers)
const avg = numbers.reduce((total, score) => total + score) / numbers.length;

console.log(max, min, avg)
