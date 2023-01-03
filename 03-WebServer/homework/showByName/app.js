var fs  = require("fs")  // file system
var http  = require("http")

// Escribí acá tu servidor
http
    .createServer((req, res) => {
        // console.log(req.url) 
        const imgName = req.url.slice(1);    //sacar el slash para capturar la ruta
        // console.log(imgName)
        const images = fs.readdirSync("./images"); // permite leer el contenido de una carpeta y lo convierte en un array
        // console.log(images)
        
        for (const image of images) { //recorrer el array de imagenes
            if (image.includes(imgName)) {
                res.writeHead(200, {"Content-type" : "image/jpg"})
                //            status ok
                const img = fs.readFileSync(`./images/${imgName}_doge.jpg`)
                return res.end(img)
            }
        }
        
        res.writeHead(404, {"Content-type" : "text/plain"})
        res.end("Doge not found")
    })
    
    .listen(3001, "localhost");


// npm init -y para crearle el packjson
// npm i nodemon
// agregar el start en package.json
