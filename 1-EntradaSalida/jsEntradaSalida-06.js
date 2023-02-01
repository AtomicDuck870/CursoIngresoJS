/*Erik Corimayo
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numUnoText;
	let numDosText;
	let numUno;
	let numDos;
	let mensaje;

	numUnoText=document.getElementById("txtIdNumeroUno").value;
	numDosText=document.getElementById("txtIdNumeroDos").value;

	numUno=parseInt(numUnoText);
	numDos=parseInt(numDosText);

	mensaje="El resultado es "+(numUno+numDos);
		alert(mensaje);
}

