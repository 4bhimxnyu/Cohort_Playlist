const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

// middleware

app.use(bodyParser.json())

app.get('/back', (req,res) => {
    console.log(2+2);
    res.send("Hello World")
    //console.log(req.params.id)
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