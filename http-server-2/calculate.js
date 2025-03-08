const express = require('express');

function calculateSum(n){
    let sum = 0;
    for(let i = 0 ; i <= n ; i++){
        sum += i;
    }
    return sum;
}


const app = express();
const port = 3007;


app.get('/',function(req,res){
    const n = req.query.n;
    const sum = calculateSum(n);
    res.send(sum.toString());
    // the sum should be sent as a string and not a number as number causes confusion , as server thinks it is a status code
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}`)
  }) 