var express = require('express');
var router = express.Router();

/* GET home page. */

 router.get('/altasocio', function(req, res, next) {
  res.render('altasocio');
});

router.get('/', function(req, res, next) {
 
  res.render('indexCultu');
});



 router.post('/altasocio', function(req, res, next) {
      console.log('body post registro :', req.body );
      var socio = {
      	



      }






  res.render('resSocioCultu');
});





module.exports = router;
