const fulfill1 = new Promise ((resolve, reject)=>{
    resolve("resuelto 1")
})

const fulfill2= new Promise ((resolve, reject)=>{
    resolve("resuelto 2")
})

const reject1 = new Promise ((resolve, reject)=>{
    reject("rechazado 1")
})

const reject2 = new Promise ((resolve, reject)=>{
    reject("rechazado 2")
})

// CASO 1
 fulfill1.then(
    //succesHandler=>()=>
  (value) => {
        console.log(value) //resuelto 1
   },
 );


// CASO 2
reject1.then(
    //succesHandler => ()=>
    (value) => {
        console.log(value) 
    },

    //errorHandler => ()=>
    (reason)=>{ 
        console.log(reason); //rechazado 1
    }
);


// CASO 3: La promesa se resuelve y no tengo succesHandler

fulfill1 // promesa => Resuelve a "Resuelto 1"
    .then() // aca no tengo el succesHandler promesa => Resuelve a "Resuelto 1" (al mismo valor, se encadena)
    .then((value)=> console.log(value)) // aca se maneja xq el .then() tiene un succesHandler


// CASO 4: La promesa se rechaza y no tengo un errorHandler (se rechaza al mismo error)

reject1 // promesa => se rechazo
    .then((value) => console.log(value)) //promesa => al no tener errorHandler se rechaza y lo pasa al siguiente
    .then((value) => console.log(value)) //promesa => al no tener errorHandler se rechaza y lo pasa al siguiente
    //.then(null, (error) => console.log(error)) // rechazado1 llega aca que si tiene errorHandler
    .catch((error) => console.log(error)) //Rechazado 1 el catch si tiene errorHanlder para manejarlo
    

// CASO 5: La promesa se resuelve y tengo handler
fulfill1
    .then(
        (value) => { 
            return "Te paso este value" // Promesa se resuelve, por el return lo pasa a la siguiente promesa (linea 66)
        },
        (error) => console.log(error) // no entra aca
    )
    .then((value) => console.log(value)) // "Te paso este value" 

// RICK & MORTY
    // fetch(url)
    //     .then(response =>{ return response.json() })
    //     .then(data=>dispatchEvent({})) 
    //           data es un objeto con todo el JSON //esta promesa se resuelve al valor de la promesa anterior


// CASO 6: La promesa resuelve un error y tengo errorHandler
reject1 // promesa => rechazada
        .then(
            (value)=>{return "otro value"}, //succesHandler
            //(error)=>{return error} // errorHandler
                    //retorna un valor, el return SIEMPRE va a ir al succesHandler     
            (error)=>{throw error} 
            //        si no quiero que el error vaya al succes siguiente en vez de un return tengo q hacer un throw
        )
     // .then(value=>{console.log(value);}) // Rechazado1 (el error retorna, por eso la recibe este .then())
     // es un succesHandler
     
    .then(  //resuelta la promesa anterior pasa el error al errorHandler y no al succes (por el throw)
        value=>console.log("succesHandler", value),
        error=>console.log("errorHandler", error)
    )   


// CASO 7: promesa resuelve una promesa

fulfill1 // resolviendo
    .then(
        //(value)=>{return fulfill2}, //retornando una promesa (le digo al then que sigue que maneje esa promesa)
        (value)=>{return reject1} ,
        //(error)=>{throw error} 
        )
        // ...en el medio etamos trabajando la promesa reject1
    .then(  
        value=>console.log("succesHandler", value), // no llega la promesa sino el valor de resolucion de la promesa Resuelto2
        // error=>console.log("errorHandler", error) //(Resolviendo el reject1 errorHandler Rechazado1)
        // viene de Linea 97 y loguea errorhandler Rechazado 1 porque trabaja reject1 y como se rechazo, viene al errorHandler
    )
    .catch(error => console.log(error)) //Rechazado 1



    //
    reject1 
    .then(
       
        (value)=>{return reject2} ,
        (error)=>{throw reject2} 
        )
        // ...en el medio etamos trabajando la promesa reject1
    .then(  
        value=>console.log("succesHandler", value), 
        error=>{throw console.log("errorHandler", error)} //erroHandler Promise {<rejected> "rechazado 2"} arroja la promesa y no un valor
    )