/*Erik corimayo
Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'. */
function mostrar()
{
	let brakIngresado;

	for(i=1; i<Infinity; i++)
	{
		brakIngresado = prompt("Ingrese break para romper el bucle "+i);
		if(brakIngresado == "break")
		{
			break;
		}
	}
	alert("fuera del bucle");
}//FIN DE LA FUNCIÓN