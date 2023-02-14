function mostrar()
{
	let horaIngresada;
	let mensaje;

	horaIngresada = parseInt(document.getElementById("txtIdHora").value);

	switch(horaIngresada)
	{
		case "7:00":
			mensaje = horaIngresada + " Es de mañana.";
			break;
	}
	alert(mensaje);
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	alert(horaDelDia);
	
	



}//FIN DE LA FUNCIÓN