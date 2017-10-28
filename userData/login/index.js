const express = require('express');
const app = express();

const bodyParser = require('body-parser')
const errMiddleware = require('./err-middleware');
const helpers = require('./helpers');
const moment = require('moment');

app.use(bodyParser.json());


app.get('/', (req,res, next) => {
  res.status(200).send('Welcome to my app!');
})

app.post('/', (req,res, next) => {

  let user = {
    username: req.body.username,
    password: req.body.password
  }

  let urlUser = 'http://localhost:3001';
  let urlTracker = 'http://localhost:3002/tracking'

  helpers.sendRequest(urlUser)
    .then((results) => {
      let result = JSON.parse(results.body);
      let urlTrackerLink = urlTracker + '?username=' + req.body.username +'&currentDate=' + moment().format('MM-DD-YYYY')

      if (!helpers.validateUser(result, user)) {
        throw new Error('Invalid username or password');
      }
      return helpers.sendRequest(urlTrackerLink);
    })
    .then((results) => {
      if (results.res.statusCode === 403 ) {
        throw new Error('User has to tried to log in too many times!');
      }
      return res.status(200).send(results.body);
    }).catch((err) => {
      next(err)
    })
});


app.use(errMiddleware);

app.listen(3003, () => {
  console.log('Listening on port 3003');
});


module.exports = app;
