/*Erik corimayo
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
          Tipo validad("arena";"cal";"cemento")
          Cantidad de bolsas(0-300),
          Precio por bolsa (más de cero y menor a 10000 ),
          al terminar la compra el cliente accede a un descuento segun las bolsas en total
            Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
            Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
                a)
                El importe total a pagar , bruto sin descuento y...
                b)
                el importe total a pagar con descuento(solo si corresponde)
                d)
                Informar la bolsa mas cara de Cal y la mas barata de Cemento.
                e)
                Cuantas bolsas de arena se compraron en total, y el promedio por compra. */
function mostrar()
{
  let producto;
  let bolsas;
  let respuesta="si";

  while(respuesta == "si")
  {
    producto = prompt("Ingrese el nombre del producto");
    switch(producto)
    {
      case "arena":
      case "cal":
      case "cemento":
      default:
        alert("Error, producto inexistente");
    }

    bolsas = parseInt(prompt("Ingrese la cantidad de bolsas que desea comprar"));
    while(bolsas < 0 || bolsas > 300)
    {
      bolsas = parseInt(prompt("Error, ingrese una cantidad valida (0-300)."));
    }
    
    respuesta = prompt("Desea agregar otro producto?");
  }

  alert("el salto del papu :v");
}
