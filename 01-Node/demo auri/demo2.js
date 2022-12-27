// const operaciones = require("./demo") //si yo lo dejo asi sin la ruta absoluta lo va a entender como que es un modulo de node
// //    es un obj
// console.log(operaciones)

// console.log(operaciones.suma(3,6))
// console.log(operaciones.mult(3,6))

//Desestructurandolo

// const {suma,mult} = require("./demo")

// console.log(operaciones)

//  console.log(operaciones.suma(3,6))
//  console.log(operaciones.mult(3,6))

 //importando

 import  {suma,mult} from "./demo";

// console.log(operaciones)

 console.log(operaciones.suma(3,6))
 console.log(operaciones.mult(3,6))

 //no funciona hay q camabiar la extension js por mjs

 