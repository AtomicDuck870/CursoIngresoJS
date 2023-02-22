/*Erik corimayo
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let sumaN=0;
	let sumaP=0;
	let cantP=0;
	let cantN=0;
	let cantC=0;
	let cantPares=0;
	let promedioP;
	let promedioN;
	let dif;

	respuesta = "si";

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, ingrese un numero"));
		}
		if(numeroIngresado < 0)
		{
			sumaN = sumaN + numeroIngresado;
			cantN = cantN + 1;
			promedioN = sumaN/cantN

		}
		else if(numeroIngresado == 0)
		{
			cantC = cantC + 1;
		}
		else
		{
			sumaP = sumaP + numeroIngresado;
			cantP = cantP + 1;
			promedioP = sumaP/cantP
		}
		if(numeroIngresado % 2 == 0)
		{
		cantPares = cantPares + 1;
		}
		respuesta = prompt("Deseas ingresar otro numero? si/no");
	}
	dif = cantP - cantN;

	document.write("Suma de los negativos: "+sumaN+"<br>");
	document.write("Suma de los positivos: "+sumaP+"<br>");
	document.write("Cantidad de positivos: "+cantP+"<br>");
	document.write("Cantidad de negativos: "+cantN+"<br>");
	document.write("Cantidad de ceros: "+cantC+"<br>");
	document.write("Cantidad de numero pares: "+cantPares+"<br>");
	document.write("Promedio de positivos: "+promedioP+"<br>");
	document.write("Promedio de negativos: "+promedioN+"<br>");
	document.write("Diferencia entre positivos y negativos: "+dif+"<br>");
}//FIN DE LA FUNCIÓN