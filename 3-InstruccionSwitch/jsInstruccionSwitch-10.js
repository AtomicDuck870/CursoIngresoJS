/*Erik corimayo
Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/
function mostrar()
{
	let estacionIngresada;
	let destino;
	let mensaje;
	
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje = "Se viaja."
					break;
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":
					mensaje = "No se viaja.";
					break;
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Cataratas":
				case "Mar del plata":
					mensaje = "Se viaja.";
					break;
				case "Cordoba":
				case "Bariloche":
					mensaje = "No se viaja.";
					break;
			}
		case "Otoño":
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje = "Se viaja.";
					break;
			}
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					mensaje = "No se viaja.";
					break;
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":
					mensaje = "Se puede viajar.";
					break;
			}
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN