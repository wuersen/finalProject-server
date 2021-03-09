
const mongoose = require('mongoose')

const Book = mongoose.model(
  "Book",
   new mongoose.Schema({
    title: String,
    authors: String,
    cover: String,
    description: String
  })
);

module.exports = Book;
