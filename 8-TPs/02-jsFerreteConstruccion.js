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
    let totalAlambre;

    largoT=parseFloat(document.getElementById("txtIdLargo").value);
    anchoT=parseFloat(document.getElementById("txtIdAncho").value);

    calculo=largoT * 2 + anchoT * 2;
    totalAlambre = calculo * 3

    alert(totalAlambre);
}
function Circulo () 
{
    let radioT;
    let calculo;
    let totalAlambre;

    radioT=parseFloat(document.getElementById("txtIdRadio").value);

    calculo = 2 * Math.PI * radioT;
    totalAlambre = calculo * 3;

    alert(totalAlambre+" metros de alambre");
}
function Materiales () 
{
	let largoT;
    let anchoT;
    let cal;
    let cemento;
    let superficie;
    let totalCal;
    let totalCemento;

    largoT=parseFloat(document.getElementById("txtIdLargo").value);
    anchoT=parseFloat(document.getElementById("txtIdAncho").value);

    superficie = largoT * anchoT;

    cal = 3;
    cemento = 2;

    totalCal = cal * superficie;
    totalCemento = cemento * superficie;

    alert("Cal total: "+ totalCal +" y el total cementento es: "+ totalCemento);
}