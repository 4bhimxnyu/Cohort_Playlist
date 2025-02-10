// this has got bugs and errors which needs to be resolved

let cohort = true ;
let learning = false

function learningCurve(){
     return new Promise(function(resolve, reject){
        if(cohort){
            resolve("Successful cohort");
        }
        else if(learning){
            resolve("Successful in learning")
        }
        else{
            reject("nothing was a success")
        }
    })
   
}

learningCurve().then(function(message){
    console.log("the promise was resolved" + message );
}).catch(function(message){
    console.log(`the promise was rejected ${message}`);
})
