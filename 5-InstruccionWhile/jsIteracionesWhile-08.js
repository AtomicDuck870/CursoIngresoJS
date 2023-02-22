/*Erik corimayo
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let resp="si";
	let i=1;
	let numero;
	let sumaP=0;
	let multiN=0;
	let contN;

	while(resp == "si")
	{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero)){
			numero = parseInt(prompt("Error, ingrese un NUMERO."));
		}
		if(numero >= 0){
			sumaP = sumaP + numero;
		}
		else{
			multiN = numero * numero;
			multiN = multiN * numero;
		}
		resp = prompt("Desea agregar otro numero? si/no");
	}
	document.getElementById("txtIdSuma").value = sumaP
	document.getElementById("txtIdProducto").value = multiN
}//FIN DE LA FUNCIÓN