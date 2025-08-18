const express = require('express');
const jwt = require('jsonwebtoken');
const zod = require('zod');

const jwtSecret ="1234567890abcdef"; // This should be stored securely in an environment variable in production
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the JWT Authentication Server");
});

// this is the database
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
    const {username,password}=req.body;
    if(!(userExists(username,password))){
        return res.status(403).json({
            msg :"user is not found in the database"
        })
    }
    // if the user exists, we will create a token for the user
    // we will use the jwt.sign method to create a token for the user
    // the first argument is the payload, which is an object that contains the data we want
    // to store in the token, the second argument is the secret key that we will use
    // to sign the token, and the third argument is an options object that contains the` 
    var token = jwt.sign({ username },jwtSecret);
    res.json({
        
        token,
    })
})
//
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