
// Inicio de la función validar datos de registro del html. 
function valDatosForm(){
	var pagoTotal = 0;

	var email = document.getElementById("email").value;
	var alias = document.getElementById("alias").value;

	if (!validarALias(alias,5)){
		mostrarError("avisoAlias");
	}
	else{
		limpiarError("avisoAlias");
	}
	console.log("email11111");
	var contrasena = document.getElementById("contrasena").value;
	if (!validarContrasena(contrasena,6)){
		mostrarError("avisoContrasena");
	}
	else {
		limpiarError("avisoContrasena") // alert("La CONTRASEÑA debe contener 6 caracteres mínimo");
	}
	
	var repeticion = document.getElementById("repetir").value;
	if (!validarRepeticionContrasena(repeticion,6)){
		mostrarError("avisoContrasenaDistinta");
	}
	else{
		limpiarError("avisoContrasenaDistinta");
		// alert("La REPETICIONCONTRASEÑA debe contener 6 caracteres mínimo");
	}

	// var pregunta = document.getElementById("preguntaId").value;
	// if (!validarPregunta()){
	// 	mostrarError("avisoPregunta");
	// }
	// else{
	// 	limpiarError("avisoPregunta");
	// }
	
	var respuesta = document.getElementById("respuesta").value;
	if (!validarRespuesta(respuesta,5)){
		mostrarError("avisoRespuesta");
		// alert("La RESPUESTA debe contener 5 caracteres mínimo");
	}
	else{
		limpiarError("avisoRespuesta");
	}
	
	console.log("email",email);
	console.log("alias",alias);
	console.log("contraseña",contrasena);
	console.log("repetir",repeticion);
	console.log("respuesta",respuesta);

	var importeSuplemento = suplemento();

		console.log("Pago Total:", importeSuplemento);

	if (importeSuplemento > 0) {
		pagoTotal = pagoTotal + importeSuplemento;
		document.getElementById("impTotal").value = pagoTotal;
		console.log("Pago Total:", pagoTotal);
	}
	else{
		return false;
	}

	
	var email = validarEmail();
	comprobarContrasena();

	if (!validarPregunta()){
		mostrarError("avisoPregunta");
		return false;
	}
	alert("mira a ver....");
	return true;	
};
//Fin de la funcion validar datos de registro del html.


// Inicio de la funcion habilitar casilla de enviar, marcando la politica de privacidad.
function habilitar(){
	var ele = document.getElementById("boton");
	var marcar = document.getElementById("casilla").checked;
	if(marcar) {
		ele.removeAttribute("disabled");
	}
	else{
		ele.setAttribute("disabled","disabled");
	}
	return true;
};
// Fin de la funcion habilitar casilla de enviar, marcando la politica de privacidad.


// Inicio de la funcion Mostrar Error del formulario.
function mostrarError(avisoErr) {

	if (avisoErr == "avisoEmail.")
	   document.getElementById(avisoErr.substr(0,avisoErr.length-1)).innerHTML = "El e-mail es incorrecto, falta el punto";
	if (avisoErr == "avisoEmail@")
	   document.getElementById(avisoErr.substr(0,avisoErr.length-1)).innerHTML = "El EMAIL es incorrecto, falta la arroba";
	if (avisoErr == "avisoEmail")
	   document.getElementById(avisoErr).innerHTML = "El Email es incorrecto, debe contener 3 caracteres minimo"; 
	if (avisoErr == "avisoAlias")
	 	document.getElementById(avisoErr).innerHTML = "El ALIAS debe contener 5 caracteres mínimo"; 
	if (avisoErr == "avisoContrasena")
	 	document.getElementById(avisoErr).innerHTML = "La CONTRASEÑA debe contener 6 caracteres mínimo";
	if (avisoErr == "avisoContrasenaDistinta")
	 	document.getElementById(avisoErr).innerHTML = "Las CONTRASEÑAS son distintas";
	if (avisoErr == "avisoPregunta")
	 	document.getElementById(avisoErr).innerHTML = "Elija una pregunta";
	if (avisoErr == "avisoRespuesta")
	 	document.getElementById(avisoErr).innerHTML = "La RESPUESTA debe contener 5 caracteres mínimo";
}
// Fin de la funcion Mostrar Error del formulario.
// Inicio de la funcion Limpiar Error del formulario.
function limpiarError(avisoErr) {
	document.getElementById(avisoErr).innerHTML = "";
};	
// Fin de la funcion Mostrar Error del formulario.


// Inicio de la función validar email de los datos de registro del html.
function validarEmail(){
	var direccor = document.getElementById("email").value;
 
	if(direccor.length > 3 ) {
	   if(direccor.indexOf("@") > 0 ) {
	    	if(direccor.indexOf(".") > 2 ){  
	    		limpiarError("avisoEmail");
	    		return true;
	    	}	
	    	else {
	    		mostrarError("avisoEmail.");
	    		return false;
	    		//alert("El Email es incorrecto falta el punto");	
	    	}	
	   }
	   else {
	   		mostrarError("avisoEmail@");
	   		return false;
	       //alert("El EMAIL es incorrecto, falta el arroba");
	   }
	}   
	else{
		mostrarError("avisoEmail");
		return false;
	    // alert("El Email es incorrecto");
	}
};
// Fin de la función validar email de los datos de registro del html.


//Inicio de la función comprobar contraseñas iguales.
function comprobarContrasena(){

    clave1 = document.getElementById("contrasena").value;
    clave2 = document.getElementById("repetir").value;

    if (clave1 != clave2) {
    	mostrarError("avisoContrasenaDistinta");
    	// alert("Error!! claves distintas");
       return false;
    }     
};
// fin de la función comprobar contraseñas iguales.




//  Inico de la función validar pregunta para recordar la contraseña.
function validarPregunta(){
	
	var lista = document.getElementById("preguntaId");
	var itemSeleccionado = lista.selectedIndex;
	var valorItem = lista.options[itemSeleccionado].value;

	if (itemSeleccionado > 0 ){
		console.log("pregunta:",itemSeleccionado);
		limpiarError("avisoPregunta");
		return valorItem;
	}
	return false;
};
// Fin de la función validar pregunta para recordar la contraseña.


function suplemento(){

	var numOpc = 0;

	if (document.getElementById("actualidadId").checked == true) numOpc+= 5; 
	if (document.getElementById("economiaId").checked == true) numOpc+= 5; 
	if (document.getElementById("internacionalId").checked == true) numOpc+= 5; 
	if (document.getElementById("deportesId").checked == true) numOpc+= 5; 
	if (document.getElementById("culturaId").checked == true) numOpc+= 5; 
	if (document.getElementById("tecnologiaId").checked == true) numOpc+= 5; 
	if (document.getElementById("saludId").checked == true) numOpc+= 5; 
	if (document.getElementById("opinionId").checked == true) numOpc+= 5; 
	
	console.log('salida caculo', numOpc);
	return numOpc;

};


function validarALias(nombreAlias,tam){
	return nombreAlias.length >= tam ? true : false;
};

function validarContrasena(contraSeguridad,tam){
	return contraSeguridad.length >= tam ? true : false;
};

	
function validarRepeticionContrasena(repeticionContrasena,tam){
	return repeticionContrasena.length >= tam ? true : false;
};

function validarRespuesta(respuesta,tam){
	return respuesta.length >= tam ? true : false;
};
// Fin de la Práctica.