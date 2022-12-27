

// //process nos proporciona un control sobre el entorno actual de node.js. 
// //EventEmmitter es una clase de node.js que es la responsable de manejar los eventos creados usando el modulo de node.js

// //stdout: flujo se salida, resultado del input que recibio
// //stdin: input de entrada


//     // Output un prompt
//     process.stdout.write('prompt > ');
// //  proceso.salida.escriba

//     // El evento stdin 'data' se dispara cuando el user escribe una línea
//     process.stdin.on('data', function (data) {
// //                metodo on (similiar al addEventListener)
//       var cmd = data.toString().trim(); 
// //                   pasamos a string (nuestro lenguaje)
// //                             saca los espacios en blanco
//       process.stdout.write('You typed: ' + cmd);
//       process.stdout.write('\nprompt > ');
//     });



const commands = require('./commands');
process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); 
  process.stdout.write('You typed: ' + cmd + "\n" );
//   if(cmd === 'date') {
//     process.stdout.write(Date());  
//   }
//   if(cmd === 'pwd') { 
//     process.stdout.write(Date());  
//   }



// switch(cmd) {
//     case "pwd":
//         commands.pwd()
//         break;
//     case "date":
//         commands.date()
//         break;
// }



commands.hasOwnProperty(cmd)
?commands[cmd]()  
: process.stdout.write('El comando no existe');

//es lo mismo que
// if(commands.hasOwnProperty(cmd)){
//     commands[cmd]()  
// } else {
//     process.stdout.write('El comando no existe');
// }
process.stdout.write('\nprompt > ');
});