function mostrar()
{
	let edad;
	let estadoCivil;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadoCivil != "Soltero")
	{
		mensaje = "Es muy pequeño para NO ser soltero";
	}
	alert(mensaje);

	//tomo la edad  
	alert("ok");
	


}//FIN DE LA FUNCIÓN