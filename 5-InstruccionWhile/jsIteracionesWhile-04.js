/*Erik corimayo
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	let resp;

	resp = "si";

	while(resp == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero del 0-9."));
		while(numeroIngresado < 0 && numeroIngresado > 10)
		{
			numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));
		}
		resp = "no";
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN