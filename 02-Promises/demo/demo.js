// function suma(a, b) {
//   console.log(a + b);
// }

// function resta(a, b) {
// //   console.log(a - b);
// // }

// function operaciones(fn, fn2) { //fn que recibe como parametro otra fn = callback
//   setTimeout(() => {
//      fn(3, 4);
//    }, 2000);
//     console.log("holii");
//     console.log("saludos");
//  }

// operaciones(suma);

// const fetch = require("node-fetch");

// let detailId = "auri";

// fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
//   .then((response) => response.json())
//   .then(
//     (info) => {
//       console.log(info); //successHandler
//     },
//     (err) => console.log(err) //errorHandler
//   );

// const miPromesa = new Promise((resolve, reject) => {
//   if (3 < 2) {
//     resolve("chin chin chin .... Esta promesa está resuelta 😎");
//   } else {
//     reject("chin chin chin .... Esta promesa está rechazada 😪");
//   }
// });

// console.log(miPromesa);

// miPromesa.then(
//   (respuesta) => {
//     console.log(respuesta);
//   },
//   (err) => console.log(err)
// );

// const axios = require("axios");

// const detailId = "auri";

// axios(`https://rickandmortyapi.com/api/character/${detailId}`)
//   .then((info) => {
//     //   console.log(info.data);
//     console.log(info.data);
//   })
//   .catch((err) => console.log(err));
