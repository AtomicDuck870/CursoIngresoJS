function mostrar()
{
	let edadI;

	edadI = parseInt(document.getElementById("txtIdEdad").value);

	if(edadI >= 18)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		if(edadI <= 17 && edadI >= 13)
		{
		alert("Usted es adolecente");
		}
		else
		{
		alert("Usted es un niño");
		}
	}
	//tomo la edad  
	alert("ok");



}//FIN DE LA FUNCIÓN