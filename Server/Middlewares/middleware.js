const express = require('express');
const app = express();

function userMiddleware(req,res,next){
    if(username!="Abhimanyu"|| password !="1234"){
        res.status(403).json({
            message: "Invalid username or password"
        });
    }
    else{
        next();
    }
}

function kidneyMiddleware(res,req,next){
    if(kidneyId!=1 || kidneyId!=2){
        res.status(403).json({
            message: "Invalid kidney id"
        })
    }
    else{
        next();
    }
}

app.get("/userCheck", userMiddleware , function(req,res){
    res.send("username is valid")
});

app.get("/kidneyCheck", userMiddleware , kidneyMiddleware , function(res,req){
    res.send("your kidney is working");
})

app.get("/heartCheck", userMiddleware, function(req,res){
    res.send("your heart is healthy")
})

app.listen(4001);