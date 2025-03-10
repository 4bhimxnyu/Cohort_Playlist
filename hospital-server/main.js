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
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1 ;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({ abhiKidneys ,
    numberOfKidneys ,
    numberOfHealthyKidneys , numberOfUnhealthyKidneys});
    console.log(users)
})

// used to get the post function running.
app.use(express.json());

app.post("/" , function (req,res){
    const isHealthy = req.body.isHealthy;
    users[0].Kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req,res){
   for(let i = 0 ; i<users[0].Kidneys.length ; i++){
        users[0].Kidneys[i].healthy = true ;
   } 
   res.json({});
})

app.delete("/",function(req,res){
    const newKidney = [];
    for(let i = 0;i <users[0].Kidneys.length ; i++){
        if(users[0].Kidneys[i].healthy){
            newKidney.push({
                healthy:true
            })
        }
    }
    users[0].Kidneys = newKidney ;
    res.json({
        msg: "Done!"
    })
})

app.listen(3000);