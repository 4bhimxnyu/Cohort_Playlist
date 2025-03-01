const express = require('express')
const app = express()
const port = 3000

app.get("/route-handler" , function(req,res){
    
    res.json({
        "firstName" : "Abhimanyu" ,
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