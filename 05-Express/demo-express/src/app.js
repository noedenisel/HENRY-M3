const express = require("express")
const morgan = require("morgan")
const mainRouter = require("./routes/routes")


const server = express () //asi creo mi servidor 

server.use((req,res, next)=>{ //server.use es para que la request entre aca //middleware
    console.log("Estamos pasando por un middleware");
    // console.log((req.url)); lo hace morgan 
    next() //para que siga su camino
})

server.use(morgan("dev")) //middleware

server.use(express.json()) //convierte cualquier body que este recibiendo en json a objeto js

server.use(mainRouter) //mandame la request alla para que las rutas esten definidas en el router

module.exports=server
