const express = require('express');
const app = express();

let numberOfrequests =0

function calculateRequests(req,res,next){
    numberOfrequests ++ ;
    console.log(numberOfrequests);
    next();
}

app.use(calculateRequests); // this is a middleware function that will be called for every request, you don't need to call it explicitly(everywhere in different routes/functions)

app.get("/number", function(req,res){
    res.json({
        msg : "calculating",
        requests : numberOfrequests
    });
    console.log("number of requests is " + numberOfrequests);

});

app.listen(3000);