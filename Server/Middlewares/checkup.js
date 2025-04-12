const express = require('express');
const app = express();
const port = 4000;

app.get('/checkup', (req, res) => {
    const KidneyId = req.query.KidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username!= "abhimanyu" && password != "1234"){
        res.status(403).json({
            message : "user is not allowed"
        });
        return;
    }

    if(KidneyId!=1 && KidneyId!=2){
        res.status(411).json({
            message : "KidneyId is not found"
            });
        return;
    }

    res.send("your body is healthy");
})

app.listen(port);