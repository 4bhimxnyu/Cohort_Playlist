const express = require('express');
const fs = require('fs')
const app = express()


app.get("/files/:fileName", function(req,res){
    const name = req.params.fileName;

    fs.readFile(name , "utf-8", function(err,data){
        res.json({
            data
        })
    });
    console.log(name);
})

app.listen(3000)

