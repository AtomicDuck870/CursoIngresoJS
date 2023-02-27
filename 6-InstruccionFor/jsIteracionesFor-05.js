/*Erik corimayo
Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9. */
function mostrar()
{
	let numeroPedido;

	for(i=1; i<Infinity; i++)
	{
		numeroPedido = parseInt(prompt("Ingrese un numero, repeticion "+i));
		while(isNaN(numeroPedido))
		{
			numeroPedido = parseInt(prompt("Error, ingrese un numero."));
		}
		if(numeroPedido == 9)
		{
			break;
		}
	}
	alert("fuera del bucle");
}//FIN DE LA FUNCIÓN