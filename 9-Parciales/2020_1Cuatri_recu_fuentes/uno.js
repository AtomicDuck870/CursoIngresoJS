/*Erik corimayo
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total */
function mostrar()
{
	let i=1;
	let producto;
	let barbijo;
	let jabon;
	let alcohol;
	let precio;


	while(i<=5)
	{
		producto = prompt("Ingrese nombre del producto");
		switch(producto)
		{
			case "barbijo":
			case "jabon":
			case "alcohol":
		}
		i=i+1;
	}
	alert("uno");
}
