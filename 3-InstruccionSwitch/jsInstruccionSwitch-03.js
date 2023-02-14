function mostrar()
{
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
			mensaje = "Este mes tiene 30 o más días";
			break;
		case "Febrero":
			mensaje = " Este mes no tiene más de 29 días.";
			break;
		case "Marzo":
			mensaje = "Este mes tiene 30 o más días";
			break;
		case "Abril":
			mensaje = "Este mes tiene 30 o más días";
			break;
		case "Mayo":
			mensaje = "Este mes tiene 30 o más días";
			break;
		case "Junio":
			mensaje = "Este mes tiene 30 o más días";
			break;
		case "Julio":
			mensaje = "Este mes tiene 30 o más días";
			break;
		case "Agosto":
			mensaje = "Este mes tiene 30 o más días";
			break;
		case "Septiembre":
			mensaje = "Este mes tiene 30 o más días";
			break;
		case "Octubre":
			mensaje = "Este mes tiene 30 o más días";
			break;
		case "Noviembre":
			mensaje = "Este mes tiene 30 o más días";
			break;
		case "Diciembre":
			mensaje = "Este mes tiene 30 o más días";
			break;
	}
	alert(mensaje);
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	
	


}//FIN DE LA FUNCIÓN