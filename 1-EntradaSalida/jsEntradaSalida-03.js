/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//reservo lugar en memoria para guardar el nombre del usuario
	let nombre; 
	
	//tomo el valor de la caja de texto (id: txtIdNombre) y se lo asigno a la variable nombre
	nombre = document.getElementById("txtIdNombre").value   //txtIdNombre es el id (identificador)de la caja de texto

	alert(nombre);


	document.getElementById("txtIdNombre").value = "";  // ""  cadena vacia, para limpiar la caja de texto
}




