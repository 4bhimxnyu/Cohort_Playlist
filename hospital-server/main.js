const express = require('express');
const app = express()

var users = [{
    name : "Abhimanyu" , 
    Kidneys : [{
        healthy:false
    }]
}];


app.get("/" , function(req,res){
    const abhiKidneys = users[0].Kidneys;
    const numberOfKidneys = abhiKidneys.length;
    let numberOfHealthyKidneys = 0;
    
    for(let i = 0 ; i < numberOfKidneys ; i++ )
    {
        if (abhiKidneys[i].healthy)
        {
            numberOfHealthyKidney = numberOfHealthyKidneys + 1 ;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({ abhiKidneys ,
    numberOfKidneys ,
    numberOfHealthyKidneys , numberOfUnhealthyKidneys});
})


app.listen(3000)