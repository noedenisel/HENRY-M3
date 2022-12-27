module.exports = {
    pwd: () => {
        const dirname = process.cwd().split("\\").at(-1);
        process.stdout.write(dirname)
        //    process.stdout.write(process.cwd()) //cwd es donde se esta ejecutando
    //                      __dirname 
    //                      imprime el nombre del archivo
    },
    date: () => {
        const date= Date()
        process.stdout.write(date)
    },
}