const express = require('express');
const zod = require('zod');
const app = express();
const schema = zod.array(zod.number())

app.use(express.json());

app.get("/",function(req, res){
    res.send("Welcome to the Kidney Server");
});

app.post("/check",function(req, res){
    const kidney = req.body.kidney;
    const result = schema.safeParse(kidney);
    if(!result.success) {{
        res.status(411).json({
            message: "Invalid input, please provide an array of numbers",
            error: result.error.errors
        })
    }}

    else{
        res.send({
            message: `The number of the kidney is ${kidney}`,
        });
    }
    
})

app.listen(4000)