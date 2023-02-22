/*Erik corimayo
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, ingrese un numero."));
		}
		if(banderaDelPrimero)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}else if(numeroMaximo < numeroIngresado)
				{
					numeroMaximo = numeroIngresado;
				}
				else if(numeroMinimo > numeroIngresado)
				{
					
				}
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN