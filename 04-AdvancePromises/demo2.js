// const promiseA = new Promise ((resolve, reject) => { //EXECUTOR
//     resolve ("Valor de resolve")
// })


// //Resolve
// promiseA
//     //.then((value)=> console.log(value)) // valor de resolve
//     .then((value) => {
//         console.log(value); // valor de resolve
//         return value
//     })
//     .then((value) => console.log(value)) //valor de resolve
//     //.then((value) => console.log(value)) // undefined (toma el succesHandler de la promesa anterior)
//     .catch((error) => console.log(error)) // nada

// //Reject
// promiseA
//     .then((value)=> console.log(value)) //nada
//     .then((value) => console.log(value)) //nada
//     .catch((error) => console.log(error)) //valor de reject


// /***************** */

// //* PRIMER CASO*/

// // Si promesa A tiene un succes Handler, la promesa B se resuelva a lo que retorna el succes Handler de la promesa A
// const promiseA = new Promise ((resolve, reject) => {
//     resolve ("Valor de resolve")
// })

// // Se resuleve promiseA, el succes handler recibe el valor de resolucion
// const promiseB = promiseA.then((value) => console.log(value)) //undefined

// promiseB.then((value)=>console.log(value)) // undefined (xq el succes Handler esta retornando undefined)

/***************** */

/** SEGUNDO CASO */

// Si promesa A NO tiene un succes Handler, la promesa B se resuelva al mismo valor  de la promesa A
// const promiseA = new Promise ((resolve, reject) => {
//     resolve ("Valor de resolve")
// })

// promiseA
//    PROMISE B .then() // resolucion = eñ o,s,p qie la promesa A
//     .then((value) => console.log(value))

/***************** */

/** TERCER CASO */
// Si promiseA tiene errorHanlder, la promiseB se rechaza a lo que retorna el error Hanlder de promiseA
// const promiseA = new Promise ((resolve, reject) => {
//     reject("Valor de reject")
// })

// promiseA
//     .then((value) => console.log(value))
//     .catch((error)=>console.log(error)) // PROMISE B
//     .catch((error)=>console.log(error)) // se rechaza a lo que retorna el valor handler

// const promiseB = promiseA.then(
//     (value) => console.log(value),
//     (error)=>console.log("el error")
//     ) 

//     promiseB.then(
//         (value) => console.log(value), // undefined
//         (err) => console.log(err) //eror
//     )

/***************** */
/** CUARTO CASO */
//Si promiseA NO TIENE error handler, promiseB se rechaza al valor de rechazo de promiseA

const promiseA = new Promise ((resolve, reject) => {
    reject("Valor de reject")
})

promiseA
    .then((value)=>console.log(value)) // nada
    .then((value)=>console.log(value)) // nada xq sigo sin tener errorHandler
    //.then(null, (error)=>console.log(error)) // .catch
    .catch((error)=> console.log(error)) //valor de reject