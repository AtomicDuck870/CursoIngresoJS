/*Erik corimayo
Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/
function mostrar()
{
	let numero;
	let contadorD;
	let respuesta;

	contadorD = 0;

	numero = parseInt(prompt("Ingrese un numero"));

	for(let i=0; i<=numero; i++)
	{
		if(numero % i == 0)
		{
			contadorD = contadorD+1;
			if(contadorD == 2)
			{
				respuesta = numero+" es primo";
			}
			else
			{
				respuesta = numero+" no es primo";
			}
		}
	}
	console.log(respuesta);
}//FIN DE LA FUNCIÓN