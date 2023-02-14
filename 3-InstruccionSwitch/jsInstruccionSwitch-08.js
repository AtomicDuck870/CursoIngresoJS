/*Erik corimayo
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	let destinoIngresado;
	let mensaje;
	
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje = "En este destino hace FRIO.";
			break;
		case "Cataratas":
			mensaje = "En este destino hace CALOR.";
			break;
		case "Mar del plata":
			mensaje = "En este destino hace CALOR.";
			break;
		case "Ushuaia":
			mensaje = "En este destino hace FRIO.";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN