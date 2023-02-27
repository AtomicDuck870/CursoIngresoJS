/*Erik corimayo
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	let i=10;

	while(i >= 1)
	{
		alert("Numero: "+i);
		i=i-1;
	}
}//FIN DE LA FUNCIÓN

/*Erik corimayo
while 2 bis: Ingresar 5 números, y determinar la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos)*/
function mostrar()
{
	let numero;
	let cantD=0;
	let cantV=0;
	let i=1;
	let promedio;

	while(i <= 5)
	{
		numero = parseInt(prompt("Ingrese un maximo de 5 numeros a continuacion:"));
		while(isNaN(numero))
		{
			numero = parseInt(prompt("Error, Ingrese un maximo de 5 numeros a continuacion:"));
		}
		if(numero <= 20 && numero >= 10)
		{
			cantV = cantV + 1;
			cantD = cantD + 1;
		}
		i=i+1
	}
	promedio = 
	mensaje = "Numeros mayores a 10: "+cantD+" y menores a 20: "+cantV;
	alert(mensaje);
}//FIN DE LA FUNCIÓN