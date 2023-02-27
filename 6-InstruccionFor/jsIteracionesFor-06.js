/*Erik corimayo
Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde
 el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados. */
function mostrar()
{
	let contador=0;
	let repetciones;
	
	repeticiones = parseInt(prompt("Ingrese un numero"));

	for(i=0; i<repeticiones; i=i+2)
	{
		contador = contador+1;
		console.log(i);
	}
	console.log(contador);
}//FIN DE LA FUNCIÓN