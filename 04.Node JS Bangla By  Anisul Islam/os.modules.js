const os = require('os');

console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname());

// if need only two
const { totalmem, freemem } = require('os');
console.log(totalmem());
console.log(freemem());
