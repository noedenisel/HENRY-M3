// 1- importamos el módulo http para poder trabajar con el protocolo
var http = require('http'); 

// 2- creamos el servidor y lo ejecutamos
http.createServer( function(req, res){ // Creamos una serie de events listener, que van a escuchar por requests que ocurren en este socket

	// 3- res tiene un metodo que es crear el header
	//Para crear un response empezamos escribiendo el header
	res.writeHead(200, { 'Content-Type':'text/plain' }) //Le ponemos el status code y algunos pair-values en el header
	// 4- finalizacion del mensaje con texto plano
	res.end('Hola, Mundo!\n'); 


})


//  5- enviarlo a un puerto
.listen(3001, '127.0.0.1'); //Por último tenemos que especificar en que puerto y en qué dirección va a estar escuchando nuestro servidor

//     puerto, servidor