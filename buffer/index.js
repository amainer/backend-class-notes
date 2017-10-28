// let buf1 = Buffer.from("This is a buffer")
//
// console.log(buf1);
// console.log(buf1.toString());
// console.log(buf1.toJSON());
// console.log(buf1[2]);
//
// buf1.write(' No 1')
//
// console.log(buf1.toString());
//
// let fs = require('fs');
// let http = require('http');
//
// let fileName = 'giantText.js'
//
// let options = {
//   // encoding: 'utf-8',
//   highWaterMark: 2 * 1024
// }
//
// const server = http.createServer((req,res) => {
//   let readable = fs.createReadStream(fileName,options);
//   let fileData = '';
//
//   readable.on('data',(chunk)=>{
//     fileData += chunk;
//     console.log(chunk);
//   })
//
//   readable.on('end', () => {
//     res.write(fileData);
//     res.end();
//   })
//
//
// })
//
// let port = 3000
//
// server.listen(port);
// console.log('Server listening on port: ' + port);
//
// let fs = require('fs');
// let zlib = require('zlib');
//
// let fileName = 'giantText.txt';
// let newFileName = 'giantText-copy.txt'
// let zippedFileName = 'giantText.zip'
//
// let options = {
//   encoding: 'utf-8',
//   highWaterMark: 8*1024
// }
//
// let readable = fs.createReadStream(fileName,options);
// let writeable = fs.createWriteStream(zippedFileName);
// let compressed = zlib.createGzip();
//
// //
// // readable.on('data', (chunk) => {
// //   writeable.write(chunk);
// // })
// //
//
// // readable.pipe(writeable)
// readable.pipe(compressed).pipe(writeable);
//


//unit tests
function aNumber() {
  return 76;
}

function multiFunction(func) {
  return func() * 11;
}

function testMultiFunction() {

  function testNumber() {
    return 32;
  }

  let valueToTest = multiFunction(testNumber);

  valueToTest === 320 ? console.log('test passed!') : console.log('test failed!');

}

testMultiFunction();
