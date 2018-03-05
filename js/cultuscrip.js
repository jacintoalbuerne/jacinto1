

function validarRadio(){

	if(formulario.lugar[0].checked == true || formulario.lugar[1].checked == true || formulario.lugar[2].checked == true || formulario.lugar[3].checked == true || formulario.lugar[4].checked == true || formulario.lugar[5].checked == true || formulario.lugar[6].checked == true || formulario.lugar[7].checked == true){
		limpiarParrafo("aviso0");
		return true;
	}
		else{ 
			limpiarParrafo("aviso0");
			cambiarParrafo("aviso0");
		}
	
};



function cambiarParrafo(parraf){

	if (parraf == "aviso0") 
		document.getElementById(parraf).innerHTML = "Escoja la ubicación de su localidad";
	if (parraf == "aviso1") 
		document.getElementById(parraf).innerHTML = "Debe de seleccionar algun tipo de socio";
	if (parraf == "aviso2") 
		document.getElementById(parraf).innerHTML = "Introduzca un nombre de al menos 4 caracteres";
	if (parraf == "aviso3") 
		document.getElementById(parraf).innerHTML = "Introduzca un apellido de al menos 4 caracteres";
	if (parraf == "aviso4") 
		document.getElementById(parraf).innerHTML = "Introduzca un numero de DNi de 8 caracteres";
	if (parraf == "aviso4b") 
		document.getElementById("aviso4").innerHTML = "Introduzca letra del DNI";
	if (parraf == "aviso5") 
		document.getElementById(parraf).innerHTML = "Introduzca dirección mayor de cinco caracteres";
	if (parraf == "aviso6") 
		document.getElementById(parraf).innerHTML = "Introduzca localidad mayor de tres caracteres";

	if (parraf == "errorEmail") 
		document.getElementById(parraf).innerHTML = "El número minimo de caracteres para el e-mail es de 8";
	if (parraf == "errorEmail2") 
		document.getElementById(parraf.substr(0,parraf.length-1)).innerHTML = "La dirección de correo debe llevar una arroba (@).";
	if (parraf == "errorEmail3") 
		document.getElementById(parraf.substr(0,parraf.length-1)).innerHTML = "La dirección de correo debe llevar un punto (.)"; 
	if (parraf == "aviso8") 
		document.getElementById(parraf).innerHTML = "Introduzca una URL correcta";
	if (parraf == "aviso9") 
		document.getElementById(parraf).innerHTML = "Introduzca un número válido de teléfono";

	//console.log("estoy en cambiar parrafo");
};


function limpiarParrafo(parraf){
	//console.log("estoy en LIMPIAR parrafo");
	document.getElementById(parraf).innerHTML = "";
};

function validaPregunta(lista){
	var lista = document.getElementById("socioS");
	var indiceCampo = lista.selectedIndex;
	console.log("indice campo:", indiceCampo);
	var valorSelect = lista.options[indiceCampo].value;
	console.log("valor select:", valorSelect);
	var textoSelect = lista.options[indiceCampo].text;
	
	console.log("valor pregunta", valorSelect);
	if(indiceCampo > 0 ){
		 limpiarParrafo("aviso1");
		 return true;
	}
	else{
		limpiarParrafo("aviso1");
		cambiarParrafo("aviso1");
		return false;
	}
};

function validaNombre(nombrelong){
	if(nombrelong.length > 4 ){
		limpiarParrafo("aviso2");
		return true;
	}
	else{
		limpiarParrafo("aviso2");
		cambiarParrafo("aviso2");
		return false;
	}
};

function validaApellido(apellidolong){
	if(apellidolong.length > 4 ){
		limpiarParrafo("aviso3");
		return true;
	}
	else{
		limpiarParrafo("aviso3");
		cambiarParrafo("aviso3");
		return false;
	}
};

function validarDatosPersonales(datoPer, tam){

	return datoPer.length >= tam ? true : false;
};

function validarDni(dnik){
	var longDni=dnik.length;
	if(longDni>7){
		var dniNumb = new Number(dnik.substr(0,(longDni-1)));
		if(Number.isNaN(dniNumb)) 
			return false;

		var alfabeto="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
		if(alfabeto.indexOf(dnik.substr((longDni-1),1).toUpperCase())<0)
			return false;

		return true;
	}	
	else {
		return false;
	}
};
function validaDireccion(direccionlong){
	if(direccionlong.length > 4 ){
		limpiarParrafo("aviso5");
		return true;
	}
	else{
		limpiarParrafo("aviso5");
		cambiarParrafo("aviso5");
		return false;
	}
};

function validaLocal(locallong){
	if(locallong.length > 3 ){
		limpiarParrafo("aviso6");
		return true;
	}
	else{
		limpiarParrafo("aviso6");
		cambiarParrafo("aviso6");
		return false;
	}
};

function validaLongEmail(textEmail){
		if(textEmail.length > 7 ){
		limpiarParrafo("errorEmail");
		return true;
	}
	else {
		limpiarParrafo("errorEmail");
		cambiarParrafo("errorEmail");
		return false;
	}
};

function validaArroba(textEmail){
 	var arroba = textEmail.indexOf("@");
		if(arroba > 0){
 		limpiarParrafo("errorEmail");
 		return true;
 	}
 	else{	
 		limpiarParrafo("errorEmail");
 		cambiarParrafo("errorEmail2");
 		return false;
 	}
};

function validaPunto(textEmail){
 	var punto = textEmail.indexOf(".");
		if(punto > 0){
 		limpiarParrafo("errorEmail");
 		return true;
 	}
 	else{	
 		limpiarParrafo("errorEmail");
 		cambiarParrafo("errorEmail3");
 		return false;
 	}
};

function validaLongUrl(tuurl){
	var longUrl=tuurl.length;
	if(longUrl>12){
		limpiarParrafo("aviso8");
		return true;
	}
	else {
		limpiarParrafo("aviso8");
		cambiarParrafo("aviso8");
		return false;
	}
};	

function validaContUrl(tuurl){
	var textUrl = document.getElementById("tuurl").value;
	var index = textUrl.match("http");
	var index1 = textUrl.match("//");
	var index2 = textUrl.match("www.");
	console.log("este es el index", index);
	console.log("este es el index", index1);
	console.log("este es el index", index2);
	if(index != null && index1 !=null && index2 !=null){
		limpiarParrafo("aviso8");
		return true;
	}
		else{ 
			limpiarParrafo("aviso8");
			cambiarParrafo("aviso8");
			return false;
		}
console.log("esta es la texturl",textUrl);
};

function validaTel(telef){
 	var textTelef = document.getElementById("telef").value;
 	var longTelef = textTelef.length;
 	console.log("este es telef", textTelef, longTelef);
 	if(isNaN(textTelef) || longTelef <9){
 		limpiarParrafo("aviso9");
		cambiarParrafo("aviso9");
		return false;
	}
	else{
		limpiarParrafo("aviso9");
		return true;
	}console.log("este es telef", textTelef, longTelef);
};


function validaForm(){
 	var nombrelong = document.getElementById("nombrek").value;
 	var apellidolong = document.getElementById("apellidok").value;
 	var lista = document.getElementById("socio");
 	var longDni=dnik.length;
 	var DNIPerk=document.getElementById("dnik").value;
 	var direccionlong = document.getElementById("direccionk").value;
 	var locallong = document.getElementById("localk").value;
 	var textEmail = document.getElementById("emailk").value;
	var arroba = textEmail.indexOf("@");
 	var punto = textEmail.indexOf(".");
 	var tuurl = document.getElementById("tuurl").value;
 	var textUrl = document.getElementById("tuurl").value;
	var index = textUrl.match("http");
	var index1 = textUrl.match("//");
	var index2 = textUrl.match("www.");
 	if (!validarRadio()) return false;
 		console.log("has validado ABONO");
 	if (!validaPregunta(lista)) return false;
 		//console.log("has validado pregunta");
 	if (!validaNombre(nombrelong)) return false;
 		//console.log("has validado nombre");	
 	if (!validaApellido(apellidolong)) return false;
 		//console.log("has validado apellido");
 	
	if (!validarDatosPersonales(DNIPerk,7)) {
		cambiarParrafo("aviso4");	
		return false;
	}
	else{
		limpiarParrafo("aviso4");
	}
	if (!validarDni(DNIPerk)) {
		cambiarParrafo("aviso4b");	
		return false;
	}
	else{
		limpiarParrafo("aviso4");
	}
	if (!validaDireccion(direccionlong)) return false;
	console.log("he validado direccion");
	if (!validaLocal(locallong)) return false;
	console.log("he validado localidad");
	if (!validaLongEmail(textEmail)) return false;
 	console.log("has validado long email");
 	if (!validaArroba(textEmail)) return false;
 		console.log("has validado arroba");
 	if (!validaPunto(textEmail)) return false;
 		console.log("has validado punto");
 	if (!validaLongUrl(tuurl)){
 		cambiarParrafo("aviso8");
 		return false;
 	} 
 	else{
 		limpiarParrafo("aviso8");
 	} 
 		console.log("has validado URL");

 	if (!validaContUrl(tuurl)){
 		cambiarParrafo("aviso8");
 		return false;
 	} 
 	
 		console.log("has validado contenido de URL");		
 		 

 	if (!validaTel(telef)){ 
 		limpiarParrafo("aviso9");
		cambiarParrafo("aviso9");
		return false;
	}
	else{
 		limpiarParrafo("aviso9");
 		return true;
 	} 

 		console.log("has validado telefono");
 	alert("Enhorabuena, ha rellenado el formulario correctamente");

};
