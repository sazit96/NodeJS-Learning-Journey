console.log(global);

//global.
setTimeout(() => {
  console.log('In The Time Out');
  clearInterval(n);
}, 3000);

const n = setInterval(() => {
  console.log('In The Interval');
}, 1000);

console.log(__dirname);
console.log(__filename);
