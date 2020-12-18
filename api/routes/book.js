const { index, show, create, update, destroy } = require('../controllers/book');

module.exports = (router) => {
    router.get('/books', index);
    router.get('/books/:id', show);
    router.post('/books/new', create);
    router.post('/books/update', update);
    router.post('/books/destroy', destroy);
    return router;
  };