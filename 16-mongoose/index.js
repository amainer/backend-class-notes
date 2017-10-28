const express = require('express');
const bodyParser = require('body-parser');

const mongodb = require('./mongodb.utils');
const Puppy = require('./puppy.model');

const app = express();
app.use(bodyParser.json());

mongodb.createEventListeners();
mongodb.connect();

// app.get('/', (req, res) => {
//   res.send('Root Endpoint');
// });
//
// app.get('/puppies', (req, res) => {
//   Puppy.find({}).exec().then((result) => {
//     res.send(result);
//   });
// });
//
// app.post('/puppies', (req, res) => {
//   const puppyToInsert = new Puppy({
//     name: req.body.name,
//     breed: req.body.breed,
//     age: req.body.age,
//     likes: req.body.likes,
//     dislikes: req.body.dislikes
//   });
//
//   puppyToInsert.save().then((result) => {
//     console.log(result);
//     res.send(result);
//   }).catch((err) => {
//     throw(err);
//   });
// });
//
// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

// Puppy.findOne({ name: 'Lily' })
//   .exec()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

  // Puppy.findById('59e53a561bce510680598105')
  //   .then((puppy) => {
  //     puppy.likes = "Sleeping, Walks, Snuggling"
  //     return puppy.save();
  //     console.log(result);
  //   })
  //   .then((result) => {
  //     console.log(result);
  //     mongodb.disconnect();
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })

  // Puppy.findByIdAndUpdate('59e53a231bce510680598104', {age: 9, name: "Fluffy Jr."}, {new: true})
  //   .then((puppy) => {
  //     console.log(puppy);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })

    // Puppy.findOneAndUpdate('59e53a231bce510680598104', {age: 10, name: "Fluffy Jr."}, {new: true})
    //   .then((puppy) => {
    //     console.log(puppy);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })

let promises = [];
Puppy.find({likes: 'some stuff'})
  .then ((puppies) => {
    for (let i = 0; i < puppies.length; i++) {
      puppies[i].age = 1;
      promises.push(puppies[i].save());
    }
    console.log(promises);
    return Promise.all(promises);
  })
  .then ((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })

// const query = Puppy.find({ breed: 'Boston Terrier' })
//   .select('name age likes')
//   .limit(2)
//   .sort({ age: -1 })
//   .exec()
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// mongodb.disconnect();


module.exports = app;
