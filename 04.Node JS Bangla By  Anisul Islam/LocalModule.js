const getName = () => {
  return 'Ehosanul Islam Sazit';
};

const getAge = () => {
  return 23;
};

const cgpa = 4.93;

// exports.getName = getName;
// exports.getAge = getAge;
// exports.result = cgpa;

module.exports = {
  getName,
  getAge,
  cgpa,
};

const myModule = require('./LocalModule');
// If you need only one
const { getName } = require('./LocalModule');

console.log(getName());
console.log(myModule.getAge());
console.log(myModule.cgpa);
