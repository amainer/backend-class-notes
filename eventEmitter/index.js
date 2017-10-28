let emitter = require('./export');

emitter.on('hello', function () {
  console.log('hello');
});

emitter.on('world', function() {
  console.log('world');
})


emitter.emit('hello');
emitter.emit('world');
