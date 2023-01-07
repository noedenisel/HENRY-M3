const { resolve, reject } = require("promise")

const miPromesa = new Promise((resolve, reject)=> {
    if(3 < 2){
        resolve("chin chin chin ... Esta promesa esta resuelta")}
    else {
        reject ("Esta promesa esta rechazada")
    }
})

//console.log(miPromesa);

miPromesa.then(
    (respuesta) => {
        console.log(respuesta)
}, 
    (err) => console.log(err)
);

const axios = require("axios")

