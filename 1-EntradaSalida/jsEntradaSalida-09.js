/*erikcorimayo
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let numUnoText;
	let numUno;
	
	numUnoText=document.getElementById("txtIdSueldo").value;
	numUno=parseInt(numUnoText);
	document.getElementById("txtIdResultado").value=Math.floor(numUno*10/100+numUno);
}
