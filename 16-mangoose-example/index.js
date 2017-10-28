const express = require('express');
const bodyParser = require('body-parser');
const libraryService = require('./library.service')
const Author = require('./author.model')
const Book = require('./book.model');
const mongodb = require('./mongodb.utils');

const jsonParser = bodyParser.json();

const app = express();
app.use(bodyParser.json());

mongodb.createEventListeners();
mongodb.connect();

const PORT = process.env.PORT || 8080;



// mongoexport --db library --collection authors --out authors.json
// mongoexport --db library --collection books --out books.json

// gcloud app deploy --project hip-rain-183900

// https://hip-rain-183900.appspot.com

// mongoimport -h ds229415.mlab.com:29415 -d amlibrary -c authors -u libraryuser -p password --file authors.json
// mongoimport -h ds229415.mlab.com:29415 -d amlibrary -c books -u libraryuser -p password --file books.json

//gcloud app deploy --project hip-rain-183900
//gcloud app logs read

// HEALTHCHECK
app.get('/', (req, res) => {
  res.status(200).send('Healthcheck!');
});

// app.get('/firstname/:name', (req, res) => {
//   Author.find({firstname: req.params.name }).exec().then((result) => {
//     res.send(result);
//   });
// });

app.get('/allauthors', (req,res) => {
  libraryService.fetchAllAuthors().then((authorsFetched) => {
    res.status(200).send(authorsFetched);
  }).catch((error) => {
    res.status(500).send(error);
  })
})

app.get('/allbooks', (req,res) => {
  libraryService.fetchAllBooks().then((booksFetched) => {
    res.status(200).send(booksFetched);
  }).catch((error) => {
    res.status(500).send(error);
  })
})

app.get('/lastname/:name', (req, res) => {
  libraryService.fetchLastName(req.params.name).then((authorsFetched) => {
    res.status(200).send(authorsFetched);
  }).catch((error) => {
    res.status(500).send(error);
  })
});

app.get('/title/:name', (req, res) => {
  libraryService.fetchTitle(req.params.name).then((titleFetched) => {
    res.status(200).send(titleFetched);
  }).catch((error) => {
    res.status(500).send(error)
  })
  // We%20have%20Always%20Lived%20in%20the%20Castle
});

app.post('/book', (req, res) => {

  var bookData = req.body.book;

  libraryService.saveBook(bookData).then((bookSaved) => {
    res.status(200).send(bookSaved)
  }).catch((error) => {
    res.status(500).send(error)
  })
});

app.post('/author', (req, res) => {

  var authorData = req.body.author;

  libraryService.saveAuthor(authorData).then((authorSaved) => {
    res.status(200).send(authorSaved)
  }).catch((error) => {
    res.status(500).send(error)
  })
});

app.put('/updateBook', (req, res) => {
  let bookData = req.body.book;

  libraryService.updateBook(bookData)
  .then((bookUpdated) => {
    res.status(200).send(bookUpdated);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.put('/updateAuthor', (req, res) => {
  let authorData = req.body.author;

  console.log(authorData);

  libraryService.updateAuthor(authorData)
  .then((authorUpdated) => {
    res.status(200).send(authorUpdated);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
//
// // mongodb.disconnect();
//
//
// module.exports = app;


//Notes

// const shirleyJackson = new Author ({
//   firstname: 'Shirley',
//   lastname: 'Jackson'
// })
//
// shirleyJackson.save()
//   .then((result) => {
//     console.log(result);
//     mongodb.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//     mongodb.disconnect();
//   })

// Author.find({ firstname: 'Shirley', lastname: 'Jackson'}).exec()
//   .then((authorResult) => {
//     const shirleyJackson = authorResult[0];
//     console.log(shirleyJackson);
//     const weHaveAlways = new Book ({
//       title : 'We have Always Lived in the Castle',
//       author: shirleyJackson._id
//     })
//     return weHaveAlways.save();
//   })
//   .then((bookResult) => {
//     console.log(bookResult);
//   })
//   .catch((err) => {
//     console.log(err);
//     mongodb.disconnect();
//   })

// let foundBook;
// Book.find( {title: 'We have Always Lived in the Castle'}).exec()
//   .then((bookResult) => {
//     foundBook = bookResult[0];
//     return Author.find( { firstname: 'Shirley', lastname: 'Jackson'}).exec();
//   })
//   .then((authorResult) => {
//     let author = authorResult[0];
//     author.books.push(foundBook._id)
//     return author.save();
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })


// Book.find( { title: 'We have Always Lived in the Castle'}).populate('author').exec()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
