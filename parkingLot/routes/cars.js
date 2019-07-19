var express = require('express');
var router = express.Router();
var service = require('./../services/cars');

// Put those below in that order to avoid conflicts
router.get('/', service.find);
router.post('/', service.create);
router.put('/:id', service.update);
router.delete('/:id', service.remove);
router.get('/new', service.new);
router.get('/edit/:id', service.edit);

module.exports = router;