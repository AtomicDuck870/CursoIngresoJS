/*erik corimayo
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numUnoText;
	let numDosText;
	let numUno;
	let numDos;
	let mensaje;

	numUnoText=document.getElementById("txtIdNumeroDividendo").value;
	numDosText=document.getElementById("txtIdNumeroDivisor").value;

	numUno=parseInt(numUnoText);
	numDos=parseInt(numDosText);

	mensaje="El resto es " +(numUno%numDos);
	alert(mensaje);
}
