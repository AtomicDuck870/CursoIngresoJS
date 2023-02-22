/*Erik corimayo
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	let resp;

	resp = "si";

	while(resp == "si")
	{
		clave = prompt("Ingrese la clave");
		while(clave != "utn750")
		{
			clave = prompt("Error, clave equivocada");
		}
		mensaje = "Clave correcta"
		resp = "no";
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN