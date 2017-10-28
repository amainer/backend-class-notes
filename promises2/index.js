const mod = require('./module');
const http = require('http');
// const fs = require('fs')

const server = http.createServer((req, res) => {
  let finishedArray = []

  finishedArray.push(mod.multiply(3,4));
  finishedArray.push(mod.multiply(5,6));
  finishedArray.push(mod.multiply(7,8));
  finishedArray.push(mod.multiply(9,10));
  finishedArray.push(mod.multiply(11,12));

  Promise.all(finishedArray)
  .then((data) => {

    // res.write('The array of numbers is: \n')
    for (i = 0; i < data.length; i++) {
      res.write(data[i].toString() + "\n");
    }

    res.end();
  }).catch((err) => {
    console.log(err);
  })
});

// let port = fs.readFileSync('prop.conf','utf-8')
let port = 3000

server.listen(port);
console.log('Server listening on port: ' + port);
