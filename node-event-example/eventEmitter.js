const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Listen for the 'greet' event
myEmitter.on('greet', () => {
  console.log('Hello, EventEmitter!');
});

// Emit the 'greet' event
myEmitter.emit('greet');
