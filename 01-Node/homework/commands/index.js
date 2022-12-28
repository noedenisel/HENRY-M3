const fs = require("fs")
const request = require("request")


const write = (value) => { 
    process.stdout.write(value + "\n")
    process.stdout.write("prompt > ");
   
}

module.exports = {
    pwd: () => {
        write(process.cwd().split("\\").at(-1));
        //    process.stdout.write(process.cwd()) //cwd es donde se esta ejecutando
    //                      __dirname 
    //                      imprime el nombre del archivo
    },

    date: () => {
        write(Date())
    },

    ls: () => {
        fs.readdir('.', (err, files) => {
//                 carpeta donde estoy
//                               donde se va a guardar el error (puede ocurrir un error en la lectura)
//                                    array de nombre de archivos
            const text = files.join("\n"); // para juntarlos todos con un salto de linea entre uno y otro
            write(text)
      });
     },

      echo: (text) => {
        write(text)
      },

      cat: (filename) => {
        fs.readFile("./" + filename, "utf8", (err,file) => {
            write(file)
        })
      },

      head: (filename) => {
        fs.readFile("./" + filename, "utf8", (err,file) => {
            write(file.split("\n").slice(0, 5).join("\n"))
        })
      },

      tail: (filename) => {
        write(file.split("\n").slice(-5).join("\n"))
      },

      curl: (url) =>{
        request(url, (error, response,body) => {
            write(body)
        })
      },
   
}