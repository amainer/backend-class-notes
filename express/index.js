const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes');

const app = express();

const errorMiddleware = (error, request, response, next) => {
  console.error(error);
  response.status(500).send('Something went wrong!');
  next();
};

// const myMiddleware = (request, response, next) => {
//   console.log('Hello from my first middleware');
//   next();
// }
//
// const myPigMiddleware = (request, response, next) => {
//   console.log('Hello from flying pigs route middleware');
//   next();
// }
//
// app.use(myMiddleware);

app.get('/', (request, response, next) => {
  response.status(200).send('My Root Endpoint');
  next();
  // next(new Error('Bad things happened'));
});

// app.get('/flyingpigs', myPigMiddleware, (request, response) => {
//   response.status(200).send('My Flying Pigs Endpoing')
// })

app.use(errorMiddleware);

app.use(bodyParser.json());
app.use('/', routes);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

module.exports = app;
