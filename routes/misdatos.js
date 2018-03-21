var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('misdatos', { title: 'Mis Datos',
  						nombre: 'Johana villacis' ,
  						apellido: 'Buenaño' ,
  						domicilio: 'Calle: Dalia' ,
  						localidad: 'Trobajo del Camino' ,
  						provincia: 'León'  });
});

module.exports = router;
