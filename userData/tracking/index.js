const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const errMiddleware = require('./err-middleware');

const moment = require('moment');
// const uuid = require('uuid');
// const errMiddleware = require('./err-middleware');
const router = require('express').Router();
// const router = require('express').Router();

app.use(bodyParser.json());

const trackingCache = {

}



app.get('/tracking', (req,res, next) => {
  // /tracking?username=spruce&currentDate=09-27-17
  //if no username or date, send back error

  if (!req.query.username || !req.query.currentDate) {
    // res.status(404).send('Username or Date undefined').end();
    return next('Username or Date undefined');
  }

  const user = req.query.username;
  const date = req.query.currentDate;

  if (!trackingCache[user]) {
    trackingCache[user] = {};
    trackingCache[user][date] = 1;
  } else if (!trackingCache[user][date]) {
    trackingCache[user][date] = 1;
  } else {
    trackingCache[user][date] += 1;
  }

  if (trackingCache[user][date] > 5) {
    // res.status(404).send('Too many attempts on the same day').end();
    return res.status(403).send('User has tried to access site more than 5 times');
  } else {
      res.status(200).json(trackingCache);
  };
  // console.log(trackingCache);
})

app.use(errMiddleware);

app.listen(3002, () => {
  console.log('Listening on port 3002');
});


module.exports = app;
