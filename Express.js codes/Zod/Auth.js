// this is authentication schema for the server using zod

const express = require('express');
const app = express();
const zod = require('zod');

app.use(express.json());

app.get("/", function(req, res) {
    res.send("Welcome to the Authentication Server");
});

function validLogin(obj){
    const schema = zod.object({
        username: zod.string().min(1),
        pass: zod.coerce.string().min(8)
    })
    const response = schema.safeParse(obj);
    console.log(response);
}

app.post("/login", function(req, res) {
    const user = req.body;
    const result = validLogin(user);
    
    if (!result.success) {
        res.status(400).json({
            message: "Invalid input, please provide a valid username and password",
            error: result.error.errors
        });
    } else {
        res.send({
            message: `Welcome ${user.username}, you have successfully logged in!`
        });
    }
})

app.listen(3000)