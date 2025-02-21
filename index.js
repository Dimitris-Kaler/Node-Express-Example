const express = require("express");
const app = express();

const PORT = 2005



app.get("/",(req,res)=>{
    res.json( {msg:"Hello World!!!"})
})


//Path Parameters
app.get("/greet/:name",(req,res)=>{
const { name } = req.params

res.json({msg:`Hello ${name}!`})
})


//Body Parameters
app.post("/greet",(req,res)=>{
    const {name,age} = req.body

    res.json({msg:`Hello my name is ${name} and im ${age} years old.`})
})


//Query Params
app.get("/greeting",(req,res)=>{
    const { name , age } = req.query

    res.json({msg:`Hello my name is ${name} and im ${age} years old.`})
})

app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:"+PORT)
})