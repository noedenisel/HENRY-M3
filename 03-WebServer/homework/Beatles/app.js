var http = require('http');
var fs   = require('fs');

var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]


//1- crear el server
http
  .createServer((req, res)=>{
    //2- crear la ruta /api
    if(req.url === "/api"){
      return res
        .writeHead(200, {"Content-type": "application/json"}) //devolvemos un formato JSON
        .end(JSON.stringify(beatles))// hay que parsear el JSON a JS
    }

    //3- crear la ruta /api/Jhon Lennon
    //console.log(req.url);
    const beatleName = req.url.split("/").pop().replace("%20", " ") //para sacar el / y el %20
    //console.log(beatleName);
    if (req.url.includes("/api/") && beatleName) {
    const beatle = beatles.filter((integrante) => integrante.name === beatleName);
    if (!beatle.length) {
    return res
      .writeHead(404, { "Content-type": "text/plain" })
      .end("Beatle not found");
  }
  
  return res
    .writeHead(200, { "Content-type": "application/json" })
    .end(JSON.stringify(beatle));
    }

    //4- conectar html index
    if(req.url === "/"){
      const index = fs.readFileSync("./index.html")
      return res
        .writeHead(200, {"Content-type" : "text/html"})
        .end(index)
    }

    //5- conectar html beatle
    const beatleOne = req.url.split("/")
    if (beatleOne.length < 3) {
      const beatleName = beatleOne[1].replace("%20", " ");
      // console.log(beatleName);
      const beatle = beatles.filter((integrante) => integrante.name === beatleName)[0];
      //console.log(beatle);
      let template = fs.readFileSync("./beatle.html", "utf-8")
      template = template.replace("{nombre}", beatle.name)
      template = template.replace("{nacimiento}", beatle.birthdate)
      template = template.replace("{imagen}", beatle.profilePic)

      return res
        .writeHead(200, {"Content-type" : "text/html"})
        .end(template)
    }


})
.listen(3001, "localhost")