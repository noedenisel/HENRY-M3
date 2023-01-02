var http = require('http');
var fs   = require('fs');

http.createServer( function(req, res){ 
	
	res.writeHead(200, { 'Content-Type':'application/json' }) //Vamos a devolver texto en formato JSON
	var obj = {//Creamos un objeto de ejemplo para enviar como response
		nombre: 'Juan',
		apellido: 'Perez'
	}; 
	
	res.end( JSON.stringify(obj) ); //Antes de enviar el objeto, debemos parsearlo y transformarlo a un string JSON
	//si envio (obj) es error
})

.listen(1337, '127.0.0.1');