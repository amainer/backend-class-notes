//old school way
// const http = require('http');
// const fs = require('fs');
// const url = require('url');
// //
// http.createServer((request,response) => {
//
//   console.log(request);
//
//   response.writeHead(200, {
//     'Content-Type': 'application/json'
//   });
//
//   const responseBody = {
//     one: 'This is a response from my web server',
//     two: 'This is another property on my response'
//   }
//
//   response.end(JSON.stringify(responseBody))
//
// }).listen(5000, '127.0.0.1');

// http.createServer((request,response) => {
//
//   if(request.url === '/person') {
//     const personObject = {
//       firstName: 'John',
//       lastName: 'Doe'
//     };
//
//     response.writeHead(200, {
//       'Content-Type': 'application/json'
//     })
//
//     response.end(JSON.stringify(personObject))
//
//   } else if (request.url === '/lorem') {
//
//       fs.createReadStream(`${__dirname}/lorem.txt`).pipe(response);
//       // __dirname + '/lorem.txt'
//   }
//
//   else if (request.url === '/') {
//     response.writeHead(200, {
//       'Content-Type': 'text/plain'
//     })
//     response.end('Root Endpoint');
//
//   } else {
//     response.writeHead(200, {
//       'Content-Type': 'text/plain'
//     })
//     response.end('Other');
//   }
//
// }).listen(5000, '127.0.0.1');

// http.createServer((request,response) => {
//   console.log('URL: ', request.url);
//   const queryData = url.parse(request.url, true).query;
//   console.log(queryData);
//   response.writeHead(200);
//   response.end();
//
// }).listen(5000, '127.0.0.1');

// curl -i -X POST -H 'Content-Type': 'application/json' -d '' http://localhost:5000/person
//curl -X POST -H 'Content-Type: application/json' -d '{"firstName" : "Sara"}' http://localhost:5000/person


// http.createServer((request,response) => {
//   if (request.url === '/person' && request.method === 'GET') {
//     const personObject = {
//       firstName: 'John',
//       lastName: 'Doe'
//     }
//
//     response.writeHead(200, {
//       'Content-Type': 'application/json'
//     });
//     response.end(JSON.stringify(personObject));
//
//   } else if (request.url === '/person' && request.method === 'POST') {
//     let body = '';
//
//     request.on('data', (chunk) => {
//       body += chunk;
//     });
//     request.on('end', () => {
//       response.writeHead(200, {
//         'Content-Type': 'text/plain'
//       })
//
//       response.end(`Request Body ${body}`)
//     })
//   }
//
//
// }).listen(5000, '127.0.0.1');

const express = require('express')
const app = express();
const routes = require('./routes');

app.use('/', routes)

app.get('/', (request, response) => {
  response.send('Hello from my Express app!');
})

app.listen(5000, () => {
  console.log('Listening on port 5000');
})

/*

  / -- root

*/
