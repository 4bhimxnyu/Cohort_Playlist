// this has got bugs and errors which needs to be resolved

let cohort = true ;
let learning = false

function learningCurve(){
     return new Promise(function(resolve, reject){
        if(cohort){
            resolve({
                name : "cohort" , 
                message : "this is a banger"
            });
        }
        else if(learning){
            resolve({
                name : "kearning" , 
                message : "learning is never stopping"
            })
        }
        else{
            reject({
                name : "error" ,
                message : "error in learning curve"
            })
        }
    })
   
}

learningCurve().then(function(msg){
    console.log("the promise was resolved " + msg.message );
}).catch(function(message){
    console.log(`the promise was rejected ${msg}`);
})
