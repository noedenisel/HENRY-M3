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

let index = 1

//*************************** CONTROLLERS */
//el controlador es el unico que puede interactuar con el array
const createPost = (author, title, contents) => {
  if (!author || !title || !contents)
    throw Error ("No se recibieron los parámetros necesarios para crear el Post")


const  newPost = {
  id: index++,
  author,
  title,
  contents
}

post.push(newPost)
return newPost


}

const getPost = (term) => {
    if(term){
        return posts.filter((post) => post.title.includes(term) || posts.contents.includes(term)  )  
    } else {
        return posts
    }
}

const getAuthorPosts = (author) => {
    const postAuthor = posts.filter (post => post.author === author)
    if (postAuthor.length) {
        return postAuthor
    } else {
        res(200).json({error: "No existe ningun post del autor indicado"})
    }
}


//*************************** ROUTES */

server.post("/posts", (req, res) => {
    const {author, title, contents} = req.body
    try {
        const newPost = createPost(author, title, contents)
        res.status(200).json(newPost)
    } catch (error) {
        res.status(STATUS_USER_ERROR).json({error: error.message})
        }
})

server.post("/posts/author/:author", (req, res) => {
    const { title, contents} = req.body
    const { author } = req.params
    try{
        const newPost = createPost(author, title, contents)
        res.status(200).json(newPost)
    } catch (error) {
        res.status(STATUS_USER_ERROR).json({error: error.message})
        }
})

server.get('/posts', (req, res)=>{
    const { term } = req.query
    const filter = getPost(term)
    res.status(200).json(filter)
})


server.put("/", (req,res)=>{})
server.head("/", (req,res)=>{})
server.delete("/", (req,res)=>{})


module.exports = { posts, server };