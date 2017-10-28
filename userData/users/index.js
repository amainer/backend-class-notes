const express = require('express');
const bodyParser = require('body-parser')
const usersData = require('./users');
const helpers = require('./helpers');
const moment = require('moment');
const uuid = require('uuid');
const errMiddleware = require('./err-middleware');
// const router = require('express').Router();

const app = express();
let today = moment().format('MMMM Do YYYY');

app.use(bodyParser.json());

app.get('/', (request,response) => {
  response.status(200).json(usersData);
})

app.get('/users/:id', (request,response, next) => {
  // let user = getUser(usersData,request.params.id);
  // response.status(200).json(user)
  console.log(request.params.id);
  if (getUser(usersData,request.params.id)) {
    const user = usersData.filter((userObject) => {
      return request.params.id === userObject.id
    });
    response.status(200).send(user[0]);
  } else {
    next('invalid user id provided')
  }


})

app.post('/users', (request,response, next) => {

  if (helpers.validateInput(request.body)) {
    let userCopy = Object.assign({}, request.body);
    userCopy.id = uuid.v4();
    userCopy.created = moment().format('MMMM Do YYYY h:mm a');
    usersData.push(userCopy);
    response.status(200).json(userCopy);
  } else{
    // response.status(404).send('Invalid user submission')
    next('invalid user data supplied');
  }
})

app.use(errMiddleware);

app.listen(3001, () => {
  console.log('Listening on port 3001');
});

function getUser(arr,id) {
  let user;

  for (let i = 0; i< arr.length; i++) {
    id.toString() === arr[i].id.toString() ? user = arr[i] : false;
  }
  return user;
}


module.exports = {
  app: app
}
