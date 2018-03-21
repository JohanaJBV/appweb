var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('marcasdeportivas', { title: 'Marcas Deportivas',
  						marca1: 'Adidas',
  						marca2: 'Puma',
  						marca3: 'Nike',
  						marca4: 'Joma', 
  						marca5: 'Umbro' });
} );

module.exports = router;
