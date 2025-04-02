const Book = require('../model/book');

const getAllBooks = async (req, res) => {
  const books = await Book.find().populate('user');
  res.json(books);
};

const getBooksByUser = async (req, res) => {
  const { userId } = req.params;

  const booksResult = await Book.find({ user: userId }).populate('user');

  res.json({
    message: 'Books:',
    books: booksResult,
  });
};

const createBook = async (req, res) => {
  const { name, author, description, imgURL } = req.body;

  const newBook = new Book({
    name,
    author,
    description,
    imgURL,
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

const returnBook = async (req, res) => {
  const { id } = req.params;
  const userId = null;
  const rented = false;

  await Book.findByIdAndUpdate(id, { rented, user: userId });
  const updatedBook = await Book.findById(id);

  res.json({
    message: 'Book returned',
    updatedBook,
  });
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { name, author, description, imgURL } = req.body;

  await Book.findByIdAndUpdate(id, { name, author, description, imgURL });
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

module.exports = {
  getAllBooks,
  getBooksByUser,
  createBook,
  rentBook,
  returnBook,
  updateBook,
  deleteBook,
};
