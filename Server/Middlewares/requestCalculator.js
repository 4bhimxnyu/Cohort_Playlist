const express = require('express');
const app = express();

let numberOfrequests =0

function calculateRequests(req,res,next){
    numberOfrequests ++ ;
    console.log(numberOfrequests);
    next();
}

app.use(calculateRequests);

app.get("/number", function(req,res){
    
    res.json({
        msg : "calculating"
    })
});

app.listen(3000);