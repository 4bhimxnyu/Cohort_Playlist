const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// middleware

app.use(bodyParser.json())

app.get("/route-handler" , function(req,res){
    console.log(req.body);
    res.json({
        "firstName" : "Abhimanyu" ,s
        "lastName" : "Singh" ,
        "age" : 18
    })
})

app.get("/" , function(req,res){
    res.send("Hello World")
})

app.get("/about" , function(req,res){
    res.json({
        "Page" : "this is the about page for the user" , 
        "firstName" : "Abhimanyu" ,
        "lastName" : "Singh" ,
        "age" : 18
    })
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}`)
  }) 