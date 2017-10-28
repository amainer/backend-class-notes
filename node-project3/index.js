// const fileIO = require('./fileIO.js')
// const http = require('http')
//
// // fileIO.createFile('newfile.txt', 'Hello World')
// // fileIO.appendFile('newFile.txt','I can append as well');
// // fileIO.deleteFile('newfile.txt')
// // fileIO.deleteFile('New File')
// // fileIO.deleteFile('newfile')
//
// const server = http.createServer((req,res) => {
//   fileIO.createFile('newFile.txt','Hello World');
//   fileIO.appendFile('newFile.txt','I can append as well');
//   res.write(fileIO.readFile('newFile.txt'));
//   res.end();
// })
//
// server.listen(3001);

let Events = require('events');

let emitter = new Events();

emitter.on('call-the-hogs', function() {
  console.log('WOOOOO');
})

emitter.on('call-the-hogs', function() {
  console.log('PIG');
})

emitter.on('call-the-hogs',function() {
  console.log('SOOIE!!');
})

emitter.emit('call-the-hogs')
