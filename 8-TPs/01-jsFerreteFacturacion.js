/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let mensaje;

    precioUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres=parseFloat(document.getElementById("txtIdPrecioTres").value);

    mensaje=precioUno+precioDos+precioTres;

    alert("El resultado es "+mensaje);
}
function Promedio () 
{
	let precioU;
    let precioD;
    let precioT;
    let mensaje;

    precioU=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioD=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioT=parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    mensaje=(precioU+precioD+precioT)/3;

    alert("El promedio es "+mensaje);
}
function PrecioFinal () 
{
	let predioU;
    let precioD;
    let precioT;
    let porcentaje;
    let resultado;
    let mensaje;

    porcentaje=21

    predioU=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioD=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioT=parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado=predioU+precioD+precioT;

    mensaje=resultado+resultado*porcentaje/100;

    alert("Precio final +IVA del 21% = "+mensaje);
}