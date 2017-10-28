// function greet(callback) {
//   console.log('Hello');
//   callback();
// }
//
// greet(function() {
//   console.log('The callback was invoked');
// })
//
// greet(function(){
//   console.log('A different callback was invoked');
// })


// const greet = function greet(callback) {
//   console.log('hello');
//
//   let data = {
//     firstName: 'Jennifer',
//     lastName: 'Smith'
//   }
//
//   callback(data);
//
// }
//
// greet(function(data) {
//   console.log('the callback was invoked, ' + data.firstName);
// })

// const greet = function(name,callback) {
//   console.log('hello ' + name);
//
//   let data = {
//     firstName: 'Jennifer',
//     lastName: 'Smith'
//   }
//
//   callback(data)
//
// }
//
// greet('Andrew', function(data){
//   console.log('The callback was invoked: ' + data.firstName);
// })

// const family = function(father,callback){
//   console.log('My father\'s name is: ' + father);
//
//   let mother = {
//     firstName: 'Beverly'
//   }
//
//   callback(mother);
//
// }
//
//
// family('Ron',function(mother){
//   console.log('My mother\'s first name is: ' + mother.firstName);
// })


// let fs = require('fs');
//
//
// console.log('Before ASYNC CALL');
// let contents = fs.readFile('testfile.txt','utf-8', function(err, data) {
//   if (err) {
//     console.log('Error');
//     console.log(err);
//     return
//   }
//   console.log('READ FILE callback');
//   console.log(data);
// })
//
// console.log('After ASYNC Call');


// const http = require('http');
// const fs = require('fs');
//
// const server = http.createServer((req, res) => {
//   let contents = fs.readFile('newfile.txt','utf-8',function(err,data) {
//     res.write(data);
//     res.end();
//   })
//   res.write('I\'m here\n')
// });
//
// let port = fs.readFileSync('prop.conf','utf-8')
//
// server.listen(port);
// console.log('Server listening on port: ' + port);
//
// setTimeout(function() {
//   console.log('still waiting');
// }, 1000);
//
// setTimeout(function(){
//   console.log('waiting');
// }, 500);

// function slowFunction () {
//   setTimeout(function () {
//     console.log('slow');
//   }, 500);
// }
//
// function fastFunction () {
//   setTimeout(function() {
//     console.log('fast');
//   },100);
// }
//
// slowFunction();
// fastFunction();
