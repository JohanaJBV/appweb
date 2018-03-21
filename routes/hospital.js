var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indexH');
});


router.post('/', function(req, res, next) {
	console.log('body post hospital :', req.body );
	var ingreso = {
		nombre: req.body.nombre,
		apell1: req.body.apellido1,
		apell2: req.body.apellido2,
		dni: req.body.dni,
		numSS: req.body.ss,
		ultVisit: req.body.visitaN,
		dolenc: req.body.nFiebre,
		horaIng: req.body.nkk,
		fechIngr: req.body.nn,
		diasEst: req.body.dias,
	}

  res.render('respIngreso', { title: 'Ingreso Paciente',
						nombre: ingreso.nombre,
						apellido1: ingreso.apell1,
						apellido2: ingreso.apell2,
						dni: ingreso.dni,
						numeroSeguridadsocial: ingreso.numSS,
						ultimaVisita: ingreso.ultVisit,
						dolencia: ingreso.dolenc,
						horaIngreso: ingreso.horaIng,
						fechaIngreso: ingreso.fechIngr,
						diasEstancia: ingreso.diasEst
						} );
});


router.put('/', function(req, res, next) {
 console.log(req.body);
  res.render('hospital',{title:'hospital'});
});

router.delete('/', function(req, res, next) {
 console.log(req.body);
  res.render('hospital',{title:'hospital'});
});
module.exports = router;
