/*Erik corimayo
Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/
function mostrar()
{
	/*let numero;
	let contadorD;

	contadorD = 0;

	numero = parseInt(prompt("Ingrese un numero"));

	for(let i=2; i<numero; i++)
	{
		if(numero%i == 0)
	}
	alert("ok");*/

	let numero;
	let primo;
	let noPrimo;
	let mensaje;
	let contador;

	numero = parseInt(prompt("Ingrese un numero"));
	if(numero == 0 || numero == 1 || numero == 4)
	for(i=1; i<numero / 2; i++)
	{
		if(numero%i == 0)
		{
			primo = numero;
			mensaje = "este numero es primo: "+primo;
			contador = contador+2;
		}
		else
		{
			noPrimo = numero;
			mensaje = "este numero NO es primo: "+noPrimo;
			contador = contador+2;
		}
	}
	console.log(mensaje);

}//FIN DE LA FUNCIÓN