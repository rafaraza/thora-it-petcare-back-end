var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ nome: 'Lolla' });

});

module.exports = router;
