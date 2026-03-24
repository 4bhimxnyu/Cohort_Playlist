// how do you complete auth checks? ensure that input by the user is valid. baiscally input validations
// middleware and authentications

const express = require("express");
const app = express();
const port = 4000;

app.get("/", function(req,res){
    res.send("you have a healthy heart");
});

app.listen(port,()=>{
    console.log(`server is active on http://localhost:${port}`);
});