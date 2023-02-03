/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoT;
    let anchoT;
    let calculo;

    largoT=parseFloat(document.getElementById("txtIdLargo").value);
    anchoT=parseFloat(document.getElementById("txtIdAncho").value);

    calculo=largoT+anchoT;

    alert(calculo);
}
function Circulo () 
{
    let radioT;
    let calculo;

    radioT=parseFloat(document.getElementById("txtIdRadio").value);

    calculo=2*Math.PI*radioT;

    alert(calculo+" metros de alambre");
}
function Materiales () 
{
	let largoT;
    let anchoT;
    let radioT;
    let calculo;

    largoT=parseFloat(document.getElementById("txtIdLargo").value);
    anchoT=parseFloat(document.getElementById("txtIdAncho").value);
    radioT=parseFloat(document.getElementById("txtIdRadio").value);

    calculo=largoT+anchoT+radioT;

    alert(calculo);
}