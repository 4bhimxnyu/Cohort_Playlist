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
        msg : "calculating",
        requests : numberOfrequests
    });
    console.log("number of requests is " + numberOfrequests);

});

app.listen(3000);