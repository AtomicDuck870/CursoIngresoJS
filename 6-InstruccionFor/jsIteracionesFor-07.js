/*Erik corimayo
Enunciado:
al presionar el botón pedir un número.
 mostrar los numeros divisores desde el 1 al número ingresado,
  y mostrar la cantidad de numeros divisores encontrados.*/
function mostrar()
{
	/*let numero;
	let cantD;

	numero = parseInt(prompt("Ingrese un numero"));
	cantD = 0;

	for(let i=1; i<numero; i++)
	{
		if(numero % i == 0)
		{
			cantD = cantD + 1;
		}
	}
	document.write("La cantidad de divisores de "+numero+" es "+cantD+"<br>");
	alert("ok");*/
	var introduce = prompt("Escribe un número");
    var numeros;

    for (numeros=2;numeros < introduce/2; numeros++) {
        if (introduce % numeros === 0) {
            console.log(numeros," lo divide ");
        }
    }


}//FIN DE LA FUNCIÓN