//callback hell example and practice
const http = require('http');
const fs = require('fs');
const mod = require('./module');

const server = http.createServer((req, res) => {
  // fs.writeFile('./newFile.txt','','utf-8',(err) => {
  //   if (err) throw err;
  //   fs.appendFile('newFile.txt','Hello World',(err) => {
  //     if (err) throw err;
  //     let contents = fs.readFile('newfile.txt','utf-8',(err,data)=> {
  //       res.write(data);
  //       res.end();
  //     })
  //   })
  // })
    let fileVariable = 'newFile.txt';

    mod.createFile(fileVariable)
    .then((fileName) => {
        return mod.appendFile(fileName,'Hello World');
    })
    .then((fileName) => {
        return mod.readFile(fileName)
    })
    .then((data) => {
      res.write(data)
      res.end();
    })
    .catch((err) => {
      console.log(err);
    });

  res.write('I\'m here\n')
});

let port = fs.readFileSync('prop.conf','utf-8')

server.listen(port);
console.log('Server listening on port: ' + port);
