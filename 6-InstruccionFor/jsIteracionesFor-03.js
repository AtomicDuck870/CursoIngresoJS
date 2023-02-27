/*Erik corimayo
Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA" */
function mostrar()
{
	let repetciones;
	let i;
	
	i=1;
	repetciones = parseInt(prompt("ingrese el número de repeticiones"));

	for(i=1; i<=repetciones; i++)
	{
		alert("Hola UTN FRA "+i);
	}
	alert("fin de las repeticiones");
}//FIN DE LA FUNCIÓN