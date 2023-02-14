function mostrar()
{
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
			mensaje = "que comiences bien el año!!!";
			break;
		case "Febrero":
		case "Marzo":
			mensaje = "a clases!!";
			break;
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
			mensaje = "se vienen las vacaciones!!";
			break;
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Felices fiestas!!!";
			break;
		default:
			mensaje = "default";
	}
alert(mensaje);



}//FIN DE LA FUNCIÓN