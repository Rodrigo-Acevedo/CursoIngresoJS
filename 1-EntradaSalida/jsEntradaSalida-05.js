/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	let nombre;
	let edad;

	nombre = document.getElementById("txtIdNombre").value;

	edad = document.getElementById("txtIdEdad").value;

	//Muestra nombre y edad por pantalla alert
	alert ("Usted se llama "+ nombre +" y tiene "+ edad +" años");
	
	//variante para mostrar por alert nombre y edad, usando back tick
	//alert(`usted se llama ${nombre} y tiene ${edad} años`);
}

