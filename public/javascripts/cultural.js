
function valDatosForm(){

	var nombre = document.getElementById("nombreId").value;
	if (!validarDatosPersonales(nombre,5)) {
		return false;
	}
	
	var apellido = document.getElementById("apellidoId").value;
	if (!validarDatosPersonales(apellido,5)) {
		return false;
	}
	
	var telefono = document.getElementById( "telefonoId").value;
	if (!validarDatosPersonales(telefono,9)) {
		return false;
	}
	


	
	console.log("nombre:",nombre);
	console.log("apellido:",apellido);
	console.log("email:",mail);
	console.log("telefono:",telefono);

	var opcSocio = validarSocio();

	var email = validarEmail();


	return false;
};




function validarDatosPersonales(datosPer,tam){

	return datoPer.length >= tam ? true : false;
};





function  validarSocio() {

	var lista = document.getElementById("socioId");
	var itemSeleccionado = lista.selectedIndex;
    var valorItem = lista.options[itemSeleccionado].value;

if (itemSeleccionado > 0 ){
	console.log("socioId:",itemSeleccionado);
	return valorItem;
}
else{
	return false;
}
};


function validarEmail(){
	var direccor = document.getElementById( "emailId").value;
		if(direccor.length > 3 ) {
	   if(direccor.indexOf("@") > 0 ) {
	    	if(direccor.indexOf(".") > 2 ){  
	    		return true;
			}
		}
	}
};