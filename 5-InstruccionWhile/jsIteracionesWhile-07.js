/*Erik corimayo
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let contador;
	let acumulador;
	let promedio;

	respuesta = "si";
	contador = 0;
	acumulador = 0;

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, ingrese un numero"));
		}
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
		respuesta = prompt("Deseas ingresar otro numero? si/no");
	}
	promedio = acumulador/contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN