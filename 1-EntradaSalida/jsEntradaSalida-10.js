/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let numUnoText;
	let numUno;
	let porcentaje;
	
	porcentaje=25
	
	numUnoText=document.getElementById("txtIdImporte").value;
	numUno=parseInt(numUnoText);
	document.getElementById("txtIdResultado").value=numUno+numUno*porcentaje/100;
}
