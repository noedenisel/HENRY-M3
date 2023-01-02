var http = require('http');
var fs   = require('fs'); //Importamos el módulo fs que nos permite leer y escribir archivos del file system

http.createServer( function(req, res){ 
	
	res.writeHead(200, { 'Content-Type':'text/html' })
	//			 status  
	//					tipo de contenido
	var html = fs.readFileSync(__dirname +'/html/index.html');
	// para leer el html de forma syncrona
	//									 ruta que tiene que leer
	res.end(html); //respuesta: la lectura del html

})

.listen(1337, '127.0.0.1');