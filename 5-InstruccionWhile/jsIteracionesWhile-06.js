/*Erik corimayo
Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let i=0;
	let promedio;

	acumulador = 0;
	contador = 0;

	while(i < 5)
	{
		i=i+1;
		numeroIngresado = parseInt(prompt("Ingrese un maximo de 5 numeros a continuacion."));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, ingresa un numero."));
		}
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
	}
	promedio = acumulador/contador;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN