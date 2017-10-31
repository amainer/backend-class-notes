const https = require('https');
const express = require('express');
const fs = require('fs');

const myKey = fs.readFileSync('my-key.pem');
const myCert = fs.readFileSync('my-cert.pem');

const options = {
  key: myKey,
  cert: myCert
};

const app = express();

app.get('/', (req,res) => {
  console.log('Root Endpoint');
  res.end('HTTPS Request with express\n')
})

https.createServer(options, app).listen(8000, () => {
  console.log('HTTP Server Listening on Port 8000');
});
