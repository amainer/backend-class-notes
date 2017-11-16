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


bankdata.find({}).exec().then((result) => {
  result.forEach((data) => {
    data.amount = parseInt(data.amount);
    bankdata.save(data);
    // { obj.moop = new NumberInt( obj.moop ); db.my_collection.save(obj);
  })

})

app.get('/scorecard', (req, res) => {
  bankdata.aggregate([
    {$group: { _id: null, total: { $sum: "$amount"}}}
  ]).exec().then((result) => {
    res.send(result);
  })
})


app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
module.exports = app;
