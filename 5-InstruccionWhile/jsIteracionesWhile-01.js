/*Erik corimayo
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar() //la funcion mostrar solo sirve para usar la ventana de texto¿
{
	let i=1;

	while(i <= 10)
	{
		mensaje = "Numero: "+i;
		alert(mensaje);
		i=i+1;
	}
	alert("Fuera del bucle.")
}//FIN DE LA FUNCIÓN