const mongoose = require('mongoose');

const bankSchema = mongoose.Schema({
  amount: String,
  date: String,
  business: String,
  name: String,
  type: String,
  account: String
});

module.exports = mongoose.model('Bankdata', bankSchema, 'bankdata');

// const mongoose = require('mongoose');
//
// const puppySchema = mongoose.Schema({
//   name: String,
//   breed: String,
//   age: Number,
//   likes: [String],
//   dislikes: [String]
// });
//
// module.exports = mongoose.model('Puppy', puppySchema);
