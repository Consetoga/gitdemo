const express = require("express")

const app = express()


app.get("/",(req,res)=>{

    res.send("Welcome to a Node Js APP!!! on Github!!!")
})

app.listen(3600,()=>console.log("App is listening at port 3600!!!"))