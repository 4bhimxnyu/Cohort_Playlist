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

// this is the kidney server which will check if the input is an array of numbers or not
// if it is an array of numbers, it will return the number of the kidney
// if it is not an array of numbers, it will return an error message
// this is a simple example of how zod can be used to validate the input and make the code more readable and maintainable
app.listen(4000,()=>{
    console.log("Kidney Server is running on port 4000");
})