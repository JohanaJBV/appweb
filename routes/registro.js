
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 console.log("registro get");
  res.render('indexRegistro');
});



router.post('/', function(req, res, next) {
 	console.log('body post registro :', req.body );
 	var registro = {
 		correo: req.body.correo,
 		alias: req.body.alias,
 		contrasena: req.body.contrasena,
 		repContra: req.body.repcont,
 		pregunta: req.body.npregunta,
 		respuesta: req.body.respuesta,
 		actualidad: req.body.actualidadN,
 		pago: req.body.importen,
 		numeroTarj: req.body.tarjetaN,
}

  res.render('resRegistro',{ title: 'Registro',
				
  					correo: registro.correo,
  					alias: registro.alias,
  					contrasena: registro.contrasena,
  					repeContra: registro.repContra,
  					pregunta: registro.pregunta,
  					respuesta: registro.respuesta,
  					suplemento: registro.actualidad,
  					pago: registro.pago,
  					numerotarjeta: registro.numeroTarj,


				});

});

router.put('/', function(req, res, next) {
 console.log(req.body);
  res.render('registro',{title:'registro'});
});

router.delete('/', function(req, res, next) {
 console.log(req.body);
  res.render('registro',{title:'registro'});
});

module.exports = router;
