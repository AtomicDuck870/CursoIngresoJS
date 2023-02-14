/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fah;
    let calculo;

    fah=parseFloat(document.getElementById("txtIdTemperatura").value);
    //(32 °F − 32) × 5/9
    calculo=(fah - 32) * 5/9;

    alert(fah+" °Fahrenheit = "+calculo+" °Centigrados");
}

function CentigradosFahrenheit () 
{
	let cent;
    let calculo;

    cent=parseFloat(document.getElementById("txtIdTemperatura").value);
    //(32 °F − 32) × 5/9
    calculo=(cent * 9/5) + 32;

    alert(cent+" °Centigrados = "+calculo+" °Fahrenheit");
}