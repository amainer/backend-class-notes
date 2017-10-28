const mongodb = require('./mongodb.utils');
const Author = require('./author.model')
const Book = require('./book.model');

module.exports = {
  fetchAllAuthors,
  fetchAllBooks,
  fetchLastName,
  fetchTitle,
  saveBook,
  saveAuthor,
  updateBook,
  updateAuthor
}

function fetchAllAuthors() {
  return Author.find({}).populate('books').exec();
}

function fetchAllBooks() {
  return Book.find({}).populate('author').exec();
}

function fetchLastName(lastName) {
  return Author.find({lastname: lastName}).populate('books').exec();
}

function fetchTitle(titleVar) {
  return Book.find({title: titleVar}).populate('author').exec();
}

function saveBook(bookToSave) {
  let authorInfo;
  let bookInfo
  return Author.find( { firstname: bookToSave.author.firstname, lastname: bookToSave.author.lastname}).exec().then((authorSearchResult) => {
    if (authorSearchResult && authorSearchResult.length > 0) {
      return authorSearchResult[0];
    } else {
      let author = new Author({
        firstname: bookToSave.author.firstname,
        lastname: bookToSave.author.lastname
      });

      return author.save();
    }
  }).then((authorSaved) => {
    authorInfo = authorSaved;

    let book = new Book({
      title: bookToSave.title,
      author: authorInfo._id
    });

    return book.save();
  }).then ((bookSaved) => {
    bookInfo = bookSaved;
    authorInfo.books.push(bookInfo._id);

    return authorInfo.save();
  }).then((updatedAuthorInfo) => {
    const infoToReturn = {
      author: authorInfo,
      book: bookInfo
    }
    return infoToReturn
  })
}

function saveAuthor(authorToSave) {
  let authorInfo;
  let bookInfo
  return Author.find( { firstname: authorToSave.firstname, lastname: authorToSave.lastname}).exec().then((authorSearchResult) => {
    if (authorSearchResult && authorSearchResult.length > 0) {
      return authorSearchResult[0];
    } else {
      let author = new Author({
        firstname: authorToSave.firstname,
        lastname: authorToSave.lastname
      });
      return author.save();
    }
  })
}

function updateBook(bookToUpdate) {
 return Book.findById(bookToUpdate.id)
 .then((bookFetched) => {
   bookFetched.title = bookToUpdate.title;
   return bookFetched.save();
 });
}

function updateAuthor(authorToUpdate) {
 return Author.findById(authorToUpdate.id)
 .then((authorFetched) => {
   authorFetched.firstname = authorToUpdate.firstname;
   authorFetched.lastname = authorToUpdate.lastname;
   return authorFetched.save();
 });
}

// function updateTitle(titleVar) {
//   return Book.update({ _id:})
// }
