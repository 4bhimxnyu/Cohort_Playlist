const express = require('express');
const app = express()

var users = [{
    name : "Abhimanyu" , 
    Kidneys : [{
        healthy:false
    }, {
        healthy:true
    }]
}];

app.get("/" , function(req,res){
    const abhiKidneys = users[0].Kidneys;
    res.send(abhiKidneys)
})

app.put("/" , function(req,res){

})


app.post("/" , function(req,res){

})

app.delete("/" , function(req,res){

})

app.listen(3000)