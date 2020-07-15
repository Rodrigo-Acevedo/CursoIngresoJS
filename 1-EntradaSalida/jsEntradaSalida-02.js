/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{	
	let nombre;   //variable declarada
	
	/*prompt: funcion nativa de javascript que nos abre una ventana emergente con una mensaje y 
	una caja de texto embebida donde el usuario puede ingresar algo*/ 
	
	nombre = prompt ("Ingrese su nombre");	    //lo que esta entre parentesis es el parametro
	
	/*alert: funcion que nos abre una ventana emergente, que tiene un mensaje. Es una ventana modal, 
	porque cuando esta no se puede interactuar con lo que esta en la pantalla, hasta que lo cierre*/
	
	alert(nombre);
}

