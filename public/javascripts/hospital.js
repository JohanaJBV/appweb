
// Inicio de la Función validar datos del formulario.
function valDatosForm(){

	var diasEstancia = 0;

	var Nombre = document.getElementById("nombre").value;
	if (!validarDatosPersonales(Nombre, 3)) { 
		mostrarError("avisoNombre")
		document.getElementById("salidaErr").value="El nombre debe contener más de 3 caracteres";
		return false;
	}
	else {
		limpiarError("avisoNombre");
	}


	var Apellido1 = document.getElementById("apellido1").value;
	if (!validarDatosPersonales(Apellido1, 3)) {
		mostrarError("avisoPrimerApellido")
		document.getElementById("salidaErr").value="El primer apellido debe contener más de 3 caracteres";
		return false;
	}	
	else {
		limpiarError("avisoPrimerApellido");
	}



	var Apellido2 = document.getElementById("apellido2").value;
	if (!validarDatosPersonales(Apellido2, 3)) {
		mostrarError("avisoSegundoApellido")
		document.getElementById("salidaErr").value="El segundo apellido debe contener más de 3 caracteres";
		return false;
	}
	else{
		limpiarError("avisoSegundoApellido");
	}



	var DNI = document.getElementById("dni").value;
	if (!validarDatosPersonales(DNI, 7)) {
		mostrarError("avisoDni")
		document.getElementById("salidaErr").value="La longitud del DNI debe ser de 8 o más caracteres"
		return false;
	}
	else{
		limpiarError("avisoDni");
	}

	var seguridadSocial = document.getElementById("ss").value;
	if (!validarDatosPersonales(seguridadSocial, 12)) {
		mostrarError("avisoSeguridadS")
		document.getElementById("salidaErr").value="La longitud del número de la seguridad social debe ser de 12 caracteres";
		return false;
		}	
		else{
			limpiarError("avisoSeguridadS");
		}


	// Consolas de los datos del formulario
	console.log("nombre:",Nombre);
	console.log("apellido1:",Apellido1);
	console.log("apellido2:",Apellido2);
	console.log("dni",DNI);
	console.log("ss",seguridadSocial);


	// Llamadas de las funciones.
	obtenerFechaIngreso();

	if (!validarDocNacIdent(DNI)) return false;
	
	if (numeroSeguridadSocial(seguridadSocial)) {
		diasEstancia = diasEstancia + 1;
		console.log("dias estancia:",diasEstancia);  
	}

	var diasDolencias = dolencias();

	if (diasDolencias > 0 ) {
		diasEstancia = diasEstancia + diasDolencias;
		console.log("dias Ingreso:",diasEstancia);
	}
	else{
		return false;
	}

	document.getElementById("dias").value = diasEstancia;
	console.log("dias estancia final:",diasEstancia);

	var opcVisita = validarVisita();

	return true;	
};
// Fin de la Función validar datos del formulario.


// Inicio de la Función validar datos personales del formulario.
function validarDatosPersonales(datoPer,tam){

	return datoPer.length >= tam ? true : false;
};
// Fin de la Función validar datos personales del formulario.


// Inicio de la Función obtener fecha ingreso del formulario.
function obtenerFechaIngreso(){

	var fechaIngre = new Date();
	var anioIngreso = fechaIngre.getFullYear();
	var mesIngreso = fechaIngre.getMonth()+1;
	var diaIngreso =  fechaIngre.getDate();
	var horaIngreso = fechaIngre.getHours();
	var minutosIngreso = fechaIngre.getMinutes();

	if(mesIngreso < 10) {
		 mesIngreso = "0"+ mesIngreso;
	}
	if (diaIngreso < 10) {
	 	diaIngreso = "0" + diaIngreso;
	}

	if (horaIngreso < 10) {
		horaIngreso = "0" + horaIngreso;
	}
	if (minutosIngreso < 10 ) {
		minutosIngreso = "0" + minutosIngreso;
	}


	var cadenaResultado =  anioIngreso + "/" + mesIngreso + "/" + diaIngreso;
	var horaIngreso = horaIngreso + ":" + minutosIngreso;

	document.getElementById("fechaingreso").value = cadenaResultado;
	document.getElementById("hora").value = horaIngreso;

	console.log("fecha ingreso:",cadenaResultado);
	console.log("hora ingreso:",horaIngreso);
};
// Inicio de la Función obtener fecha ingreso del formulario.

 
// Inicio de la Función validar documento nacional de identidad del formulario.
function validarDocNacIdent(documentoIdent){

	var longDNI= documentoIdent.length;
	console.log("dni en funcion", documentoIdent);
	if(longDNI > 7){
		
		var dniNumb = new Number(documentoIdent.substr(0,(longDNI-1)));
		console.log("dninum", dniNumb);
	
		if(Number.isNaN(dniNumb)) {
			mostrarError("avisoDniN");
			return false;
		}
		else{
			limpiarError("avisoDni");
		}
	// nos muestra el DNI valido con letra y solo tiene que ser con numeros, corregirlo
	 console.log("dninum22", dniNumb);

		var alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
		if (alfabeto.indexOf(documentoIdent.substr((longDNI-1),1).toUpperCase()) < 0){
			document.getElementById("salidaErr").value="Formato incorrecto, el DNI debe contener una letra al final"
			mostrarError("avisoDniL");
			return false;
		}
		console.log("dni letra ok");
		limpiarError("avisoDni");
		return true;
	}
	else{
		limpiarError("avisoDni");
		return false;
	}
};
// Fin de la Función validar documento nacional de identidad del formulario.


// Inicio de la Función Doloencias.
function dolencias() {
	var diasIng = 0

	if (document.getElementById("fiebreId").checked == true) diasIng+= 2; 
	if (document.getElementById("dolorMuscularId").checked == true) diasIng+= 2; 
	if (document.getElementById("dolorEstomacalId").checked == true) diasIng+= 2; 
	if (document.getElementById("vomitosId").checked == true) diasIng+= 2; 
	if (document.getElementById("mareosId").checked == true) diasIng+= 2; 
	if (document.getElementById("hipertencionId").checked == true) diasIng+= 2; 
	if (document.getElementById("traumatismosId").checked == true) diasIng+= 2; 
	if (document.getElementById("perdidaSensibilidadId").checked == true) diasIng+= 2; 
	if (document.getElementById("insuficienciaCardiacaId").checked == true) diasIng+= 2; 
	if (document.getElementById("insuficienciaRespiratoriaId").checked == true) diasIng+= 2; 
	if (document.getElementById("otrasDolenciasId").checked == true) diasIng+= 2;
		{
		document.getElementById("salidaErr").value="Debe seleccionar una opción de las dolencias"
return diasIng;
}

};
// Fin de la Función Doloencias.


// Inicio de la funcion ultima visita la hospital.
function validarVisita(){
	
	var lista = document.getElementById("visitaId");
	var itemSeleccionado = lista.selectedIndex;
	var valorItem = lista.options[itemSeleccionado].value;

	if (itemSeleccionado > 0 ){
		console.log("visita:",itemSeleccionado);
		limpiarError("avisoVisita");
		return valorItem;
	}
	else{
		mostrarError("avisoVisita");
		return false;
	}
};
// Inicio de la funcion ultima visita la hospital.



// Inicio de la Función numero de la seguridad social.
function numeroSeguridadSocial(numSS){
 
	 if (numSS.substr(0,2) == "24")
	 	return true;
	 else
	 	return false;
	 
};
// Fin de la Función numero de la seguridad social.


//Inicio de la funcion Mostrar Error del formulario.
function mostrarError(avisoErr) {

if (avisoErr == "avisoNombre")
	 	document.getElementById(avisoErr).innerHTML = "El nombre debe contener más de 3 caracteres";
if (avisoErr == "avisoPrimerApellido")
	 	document.getElementById(avisoErr).innerHTML = "El primer apellido debe contener más de 3 caracteres";	 
if (avisoErr == "avisoSegundoApellido")
	 	document.getElementById(avisoErr).innerHTML = "El segundo apellido debe contener más de 3 caracteres";
if (avisoErr == "avisoDni")
		document.getElementById(avisoErr).innerHTML = "La longitud del DNI debe ser de 8 o más caracteres";
if (avisoErr == "avisoDniL")
		document.getElementById(avisoErr.substr(0,avisoErr.length-1)).innerHTML = "Formato incorrecto, el DNI debe contener una letra al final";
if (avisoErr == "avisoDniN")
		document.getElementById(avisoErr.substr(0,avisoErr.length-1)).innerHTML = "Debe contener un formato numérico";
if (avisoErr == "avisoSeguridadS")
		document.getElementById(avisoErr).innerHTML = "La longitud del número de la seguridad social debe ser de 12 caracteres";
if (avisoErr == "avisoVisita")
		document.getElementById(avisoErr).innerHTML = "Seleccione una opción";
if (avisoErr == "avisoDolencias")
		document.getElementById(avisoErr).innerHTML = "Debe seleccionar una opción de las dolencias";
};

// Fin de la funcion Mostrar Error del formulario.




// Inicio de la funcion Limpiar Error del formulario.
function limpiarError(avisoErr) {
	document.getElementById(avisoErr).innerHTML = "";
}

// Fin de la funcion Mostrar Error del formulario.









// Fin de la práctica del examen2 del Hospital Universitario de León.