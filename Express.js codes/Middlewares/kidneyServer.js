const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.get("/", function(req, res, next){
    res.send("Welcome to the Kidney Server");
});

app.post("/kidneyId",function(req, res, next){
    const kidney = req.query.kidney;
    if(kidney){
        res.send({
            message: `The number of the kidney is ${kidney}`,
        });
        return;
    }
    res.send({
        message: "No kidney number provided",
    });
});

app.use((err,req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        message: 'Something went wrong!',
        error: err.message
    });
}
); 

app.listen(port,()=>{
    console.log(`server is active on http://localhost:${port}`);
});

// To test this server, you can use a tool like Postman or curl to send a POST request to http://localhost:4000/kidney with a JSON body like: