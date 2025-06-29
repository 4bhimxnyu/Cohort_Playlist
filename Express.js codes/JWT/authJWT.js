const express = require('express');
const jwt = require('jsonwebtoken');
const zod = require('zod');

const jwtSecret ="pass2049";     
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the JWT Authentication Server");
});

const user = [
    {
        username: "abhimanyu",
        password: "12345678",
        email :"abhimanyu@gmail.com"
    },
    {
        username: "john",
        password: "12345678",
        email :"johndoe@gmailc.ocm"
    },
    {
        username: "jane",
        password: "12345678",
        email :"ajnedo2@gmail.com"
    }
];

// this is a simple database for the user and we are checking if the user exists in the db by the method nelow

function userExist  (username, password) {
    const userExist = false;
    for (let i = 0; i < user.length; i++) {
        if (user[i].username === username && user[i].password === password) {
            userExist = true;
            break;
        }
    }
    return userExist;
};



app.post('login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    if(!userExist(username,password)){
        return res.status(403).json({
            msg :"user is not found in the database"
        })
    }

    var token = jwt.sign({ username },jwtSecret)
    res.status(200).json({
        msg:"User is logged in successfully",
        token: token
    })
})

//app.get("/protected")

app.listen(3000);