/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let numUnoText;
	let numUno;
	
	numUnoText=document.getElementById("txtIdImporte").value;
	numUno=parseInt(numUnoText);
	document.getElementById("txtIdResultado").value=Math.floor(numUno-numUno*25/100);
}
