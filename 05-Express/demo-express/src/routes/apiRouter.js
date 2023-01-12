const { Router } = require("express")
const database = require ("../database")

const apiRouter = Router()

apiRouter.get("/", (req, res) => {
    //console.log((req.query));
    const { name } = req.query
    console.log(name);
    if (name) {
        const searchResults = database.filter((character) => character.name === name)
        res.status(200).json(searchResults)  
    } else { 
       res.status(200).json(database)  
    }
})

apiRouter.get("/:id", (req, res)=>{ //no necesito escribir mas api, xq api ahora es la raiza
   try{
    const { id } = req.params //desestructuro res.status(200).send(req.params.id)
   // res.status(200).send(id)
   const character = database.find((character) => character.id == id)
   if (!character) throw Error ("character does not exist") // forzamos nuestro propio error
   res.status(200).json(character)
} catch (error) {
    res.status(404).json({error:error.message})
    }
})

apiRouter.post("/", (req,res) => {
   // console.log(req.body);
   const { name, gender } = req.body
   const newCharacter = {
    id: database.length + 1,
    name,
    gender,
    species : "Human",
    status: "Alive"
   }
   database.push(newCharacter)
   res.status(200).json({created: ok})
})

module.exports = apiRouter