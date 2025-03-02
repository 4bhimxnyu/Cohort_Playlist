const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// middleware

app.use(bodyParser.json())

app.post('/', (req,res) => {
    console.log(req.body);
    res.send("Hello World")
})

app.get("/route-handler" , function(req,res){
    res.json({
        "firstName" : "Abhimanyu" ,
        "lastName" : "Singh" ,
        "age" : 18
    })
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