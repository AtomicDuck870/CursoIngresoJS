/*Erik corimayo
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad ,
 edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas. */
function mostrar()
{
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta="si";

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese su nombre");
		
		nacionalidad = prompt("Ingrese su nacionalidad");
		
		edad = parseInt(prompt("Ingrese su edad"));
		sexo = prompt("Ingrese su genero");
		estadoCivil = prompt("Ingrese su estado civil");
		switch(estadoCivil)
		{
			case "soltero":

			case "casado":
			case "viudo":
		}
		temperaturaCorporal = parseFloat(prompt("Ingrese su temperatura corporal"));
		respuesta = prompt("Desea agregar datos de otra persona?");
	}
	alert("tres");
}
