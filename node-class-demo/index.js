// const http = require('http');
// //const myModule = require('./example-module');
// // const myModule = require('./example-module').anotherFunctionExample;
// const myModule = require('./example-module');
//
// const server = http.createServer((req, res) => {
//   //res.write('Hello from my first ES6 compliant web server!');
//   //res.write(myModule.example());
//   // res.write(myModule());
//   // res.write(myModule.anotherFunctionExample());
//   // res.write(myModule())
//   res.write(myModule.revealPatternExample());
//   res.write(myModule.aDifferentExample())
//   res.end();
// });
//
// server.listen(3000);


const greetings = require('./example-module')

greetings.greet('Andrew')
