const Book = require('../model/book');
const user = require('../model/user').default;

const getAllBooks = async (req, res) => {
  const books = await Book.find().populate('user');
  res.json(books);
};

const createBook = async (req, res) => {
  const { name, author } = req.body;

  const newBook = new Book({
    name,
    author,
    rented: false,
  });

  await newBook.save();

  res.json({
    message: 'New Book created',
    newBook,
  });
};

const rentBook = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  const rented = true;

  await Book.findByIdAndUpdate(id, { rented, user: userId });
  const updatedBook = await Book.findById(id);

  res.json({
    message: 'Book renteded',
    updatedBook,
  });
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { name, author } = req.body;

  await Book.findByIdAndUpdate(id, { name, author });
  const updatedBook = await Book.findById(id);

  res.json({
    message: 'Book updated',
    updatedBook,
  });
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  await Book.deleteOne({ _id: id });
  res.json({ message: 'Book deleted' });
};

module.exports = { getAllBooks, createBook, rentBook, updateBook, deleteBook };
