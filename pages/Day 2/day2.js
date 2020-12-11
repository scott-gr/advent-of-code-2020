import { list, anotherList} from './data.js'


///these steps could probably be combined, but this should be easy to follow
// 1. remove the dashes and colons, make list into an array seperated by line break
let data = list.replace(/\-/g, ' ').replace(/\:/g, '').split`\n`;
// 2. split each line into its own array
let array = [];
data.forEach(function (i) {
  array.push(i.split` `);
});
//3. Create an object for each key:value pair, then combine all four pairs to one object. These objects are now indexes in a new array 'passwords'
let passwords = [];
array.forEach(function (i) {
  let minObj = { min: parseInt(i[0]) };
  let maxObj = { max: parseInt(i[1]) };
  let charObj = { char: i[2] };
  let passObj = { pass: i[3] };
  let entry = Object.assign({}, minObj, maxObj, charObj, passObj);
  passwords.push(entry);
});

///Counters for # of valid passwords
let validCount = 0;
//iterate through array, checking how many times the 'char' property of each entry object appears in the 'pass' property
passwords.forEach((item) => {
  const matches = item.pass.match(new RegExp(item.char, 'g'));
  if (matches !== null) {
    //adds a new property to note number of character matches. null is 0
    item.matches = matches.length;
  } else {
    item.matches == 0;
  }
  //checks if the number of matches is within the object's min-max rule, adds a new property to indicate validity
  if (item.matches <= item.max && item.matches >= item.min) {
    item.validity = 'valid';
    validCount++;
  } else {
    item.validity = 'invalid';
  }
});
//an array with objects for each entry, noting validity. This is a better data set than the initial 'list' input
console.log(passwords);
//here's the solution!
console.log(validCount);
