/*Erik corimayo
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/
function mostrar()
{
	let horaIngresada;
	let mensaje;

	horaIngresada = parseInt(document.getElementById("txtIdHora").value);

	switch(horaIngresada)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = horaIngresada + " Es de mañana.";
			break;
		default:
			mensaje = horaIngresada;
	}
	alert(mensaje);
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	alert(horaDelDia);
	
	



}//FIN DE LA FUNCIÓN