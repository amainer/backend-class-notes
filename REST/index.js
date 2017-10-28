const http = require('http');

const baseURL ='jsonplaceholder.typicode.com'
// const httpOptions = {
//   host: baseURL,
//   path: '/posts/1'
// }

// http.get(httpOptions, (response) => {
//   response.setEncoding('utf8');
//   let body = '';
//   response.on('data',(chunk) =>{
//     body += chunk;
//   })
//
//   response.on('end', () =>{
//     console.log(JSON.parse(body));
//   });
// });

const httpPostOptions = {
  host:baseURL,
  path: '/posts/1',
  method: 'PUT'
};

const postData = {
  // title: 'test',
  body: 'this is a test post'

}

const req = http.request(httpPostOptions, (response) => {
  response.setEncoding('utf8');

  let body = ''
  response.on('data', (chunk) => {
    body += chunk;
  })

  response.on('end', () => {
    console.log(body);
  })

})

req.write(JSON.stringify(postData))
req.end();
