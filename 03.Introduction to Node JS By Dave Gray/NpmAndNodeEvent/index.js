const logEvent = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => logEvent(msg));

setTimeout(() => {
  myEmitter.emit('log', 'log Event Emitted!');
}, 2000);
