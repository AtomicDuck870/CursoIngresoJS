function mostrar()
{
	let nota;
	let mensaje;

	nota = Math.ceil(Math.random(2)*10);

	if(nota >= 9)
	{
		mensaje = "EXCELENTE: "+ nota;
	}
	else
	{
		if(nota > 4)
		{
		mensaje = "APROBO: "+ nota;
		}
		else
		{
		mensaje = "Vamos, la proxima se puede: "+ nota;
		}
	}
	alert(mensaje);
	//Genero el número RANDOM entre 1 y 10 
	alert("ok");

}//FIN DE LA FUNCIÓN