/*Erik corimayo
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	let resp;

	resp = "si";

	while(resp == "si")
	{
		sexoIngresado = prompt("Ingrese su sexo");
		while(sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt("Error, ingrese f/m");
		}
		resp = "no"
		if(sexoIngresado == "f")
		{
			sexoIngresado = "Femenino";
		}
		else if(sexoIngresado == "m")
		{
			sexoIngresado = "Masculino";
		}
	}
	document.getElementById("txtIdSexo").value = sexoIngresado;
}//FIN DE LA FUNCIÓN