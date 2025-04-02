const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');
const WithAuth = require('../middlewares/auth');

router.get('/book', bookController.getAllBooks);
router.get('/booksByUser/:userId', bookController.getBooksByUser);
router.post('/book', WithAuth, bookController.createBook);
router.put('/bookrent/:id', WithAuth, bookController.rentBook);
router.put('/bookrenturn/:id', WithAuth, bookController.returnBook);
router.put('/book/:id', WithAuth, bookController.updateBook);
router.delete('/book/:id', WithAuth, bookController.deleteBook);

module.exports = router;
