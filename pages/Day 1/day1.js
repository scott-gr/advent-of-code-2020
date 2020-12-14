import { list } from './data.js'

const arr = list.split('\n').map(Number);
console.log(arr);

// Target sum for the puzzle was 2020
const sum = 2020;

const findpair = (arr, sum) => {
  const map = {};
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      results.push([sum - arr[i], arr[i]]);
      continue;
    }
    map[sum - arr[i]] = true;
  }
  return results;
};

console.log(findpair(arr, sum));

const findtriplet = (arr) => {
  let results = [];
  let indexes = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const balance = sum - (arr[i] + arr[j]);
      const item = arr.find((el) => el === balance);
      if (item && !indexes.includes(i) && !indexes.includes[j]) {
        results.push([arr[i], arr[j], item]);
        indexes.push(i);
        indexes.push(j);
      }
    }
  }
  return results;
};

console.log(findtriplet(arr, sum));