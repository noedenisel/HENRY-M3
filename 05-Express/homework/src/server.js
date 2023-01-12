// const bodyParser = require("body-parser");
const express = require("express");
const { post } = require("../../demo-express/src/routes/apiRouter");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests

server.post("/posts", (req, res) => {
  const { author, title , contents } = req.body;
  if (author && title && contents) {
    const newPost = { 
      author, 
      title, 
      contents, 
      id: posts.length + 1 
    };
    posts.push(newPost);
    res.status(200).json(newPost);
  } else {
    res.status(STATUS_USER_ERROR);
    res.json({error: "No se recibieron los parámetros necesarios para crear el Post"});
  }
});


server.post("/posts/author/:author", (req, res) => {
  const { title , contents,  } = req.body;
  const { author } = req.params
  if(!title || !contents ) {
    res.status(STATUS_USER_ERROR);
    res.json({error: "No se recibieron los parámetros necesarios para crear el Post"});
  } 
  else {
    const newPost = { 
    author, 
    title, 
    contents, 
    id: posts.length + 1 
  };
  posts.push(newPost);
  res.status(200).json(newPost);
}
});


server.get('/posts', (req, res) => {
  const { term } = req.query
  if (term) {
    const filter =  posts.filter((post) => post.title.includes(term) || post.contents.includes(term)) 
    res.status(200).json(filter);
  } else { 
     res.status(200).json(posts)  
  }
 });


server.get("/posts/:author", (req, res) => {
  const { author } = req.params
  const postAuthor = posts.filter (post => post.author === author)
     if (postAuthor.length) {
      res.status(200).json(postAuthor);
     } else {
      res.status(STATUS_USER_ERROR);
      res.json({error: "No existe ningun post del autor indicado"});
     }
  })


server.get("/posts/:author/:title", (req, res) => {
  const { author, title } = req.params
  const busqueda = posts.filter((post) => post.title === title && post.author === author)
    if (busqueda.length) {
      res.status(200).json(busqueda)
    } else {
      res.status(STATUS_USER_ERROR)
      res.json({error: "No existe ningun post con dicho titulo y autor indicado"})
    }
})


server.put("/posts", (req, res) => { 
  const { id, title, contents } = req.body
    if (!id || !title || !contents) 
    res.status(STATUS_USER_ERROR).json({ error: "No se recibieron los parámetros necesarios para modificar el Post"})      
  const post = posts.find((post) => post.id == id) 
  if (post) {
    post.title = title
    post.contents = contents
    res.status(200).json(post)
  } else {
    res.status(STATUS_USER_ERROR).json({error: 
      "No se recibieron los parámetros necesarios para modificar el Post"})
  }
})




module.exports = { posts, server };
