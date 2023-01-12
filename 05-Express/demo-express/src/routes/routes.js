const { Router } = require("express")
const apiRouter = require("./apiRouter")

const mainRouter = Router() //instancia de ruta

mainRouter.get("/", (req,res)=>{
    res.status(200).json({message: "Hola mundo"})
}) //funcion CONTROLADOR 

mainRouter.get("/api", (req, res)=>{//request get/api se guarda en req
    res.status(200).send("Estamos en API")
})

mainRouter.use("/api", apiRouter)


    
module.exports = mainRouter