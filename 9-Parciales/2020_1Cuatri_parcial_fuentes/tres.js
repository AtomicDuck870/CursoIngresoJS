/*Erik corimayo
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")
y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta="si";

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese su nombre");
		edad = parseInt(prompt("Ingrese su edad"));
		sexo = prompt("Ingrese su genero");
		estadoCivil = prompt("Ingrese su estado civil");
		temperaturaCorporal = prompt("Ingrese su temperatura corporal");
		while(isNaN(edad+temperaturaCorporal) && edad > 0 && edad < 116)
		{
			edad = parseInt(prompt("Error, ingrese un numero o un valor correcto."));
			nombre = prompt("Error, ingrese un nombre valido.");
			sexo = prompt("Error, ingrese f(Femenino) o m(Masculino) respecivamente");
			estadoCivil = prompt("Error, ingrese un estado civil valido. ej: soltero/a, casado/a o viudo/a");
			temperaturaCorporal = parseFloat(prompt("Error, ingrese un valor valido en °C. ej: 36.1°C"));
		}
		if(edad > 60)
		{
			
		}
		respuesta = prompt("Desea agregar mas datos? si/no");
	}

	alert("tres");
	console.log(nombre+edad+sexo+estadoCivil+temperaturaCorporal+"info");
}
