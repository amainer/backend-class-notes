const express = require('express');
const bodyParser = require('body-parser');

const mongodb = require('./mongodb.utils');
const bankdata = require('./bankdata.model');

const app = express();
app.use(bodyParser.json());

mongodb.createEventListeners();
mongodb.connect();

app.get('/', (req, res) => {
  res.send('Root Endpoint');
});

app.get('/data', (req, res) => {
  bankdata.find({}).exec().then((result) => {
    res.send(result);
  });
});


app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
module.exports = app;
