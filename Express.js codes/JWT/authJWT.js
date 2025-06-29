const express = require('express');
const jwt = require('jsonwebtoken');
const zod = require('zod');

const jwtSecret ="1234567890abcdef"; // This should be stored securely in an environment variable in production
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the JWT Authentication Server");
});

const ALL_USERS = [
    {
        name : "abhimanyu",
        password: "12345678",
        username :"abhimanyu@gmail.com"
    },
    {
        name : "john",
        password: "12345678",
        username :"johndoe@gmailc.ocm"
    },
    {
        name : "jane",
        password: "12345678",
        username :"ajnedo2@gmail.com"
    }
];

// this is a simple database for the user and we are checking if the user exists in the db by the method nelow

function userExists  (username, password) {

    for (let i = 0; i < ALL_USERS.length; i++)
    {
        if (ALL_USERS[i].username === username && ALL_USERS[i].password === password) {
            return true;
        }
    }
    return false;
};



app.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    if(!(userExists(username,password))){
        return res.status(403).json({
            msg :"user is not found in the database"
        })
    }

    var token = jwt.sign({ username },jwtSecret);
    res.json({
        
        token,
    })
})

app.get("/protected",function(req, res) {
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtSecret);
        const username = decoded.username;
        const name =
        res.status(200).json({
            msg: `Welcome ${username}, you are authenticated!`
        }); 
    } catch (error) {
        res.status(401).json({
            msg: "Invalid token, please login again",
            error: error.message
        });         
    }
});

app.listen(3000);