
const express = require('express');
const app = express();
const post = 3000;

const routes = require('./routes/links')

const connectionDB = require('./db/connect');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.json())
app.use(express.static("./public"))
app.get("/hello", (req, res)=>{
    res.send("hello bb******")
})

app.use('/api/v1/tasks', routes)
require('dotenv').config()


const start = async () =>{
    try{
      await connectionDB(process.env.MONGO_URI);
      app.listen(post, console.log(`hey bitch is running on ${post} again`))
    }catch(err){
      console.log(err)
    }
}
start();