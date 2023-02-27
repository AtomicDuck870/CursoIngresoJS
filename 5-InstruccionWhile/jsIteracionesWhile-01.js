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

/*Erik corimayo
While 1 bis- edad y nombre , informar el nombre de la persona mas vieja y la mas joven*/
function mostrar()
{
	let edad;
	let nombre;
	let resp;

	resp = "si";

	while(resp == "si")
	{
		nombre = prompt("Ingrese nombre");
		edad = parseInt(prompt("Ingrese edad"));
		while(isNaN(nombre))
		{
			nombre = prompt("Error, ingrese un nombre.");
		}
		if(edad > edad)
		{
			
		}
		resp = prompt("Desea agregar mas datos? si/no");
	}
}//FIN DE LA FUNCIÓN