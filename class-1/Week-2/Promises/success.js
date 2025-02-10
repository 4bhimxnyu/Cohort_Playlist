// this has got bugs and errors which needs to be resolved

let cohort = false ;
let learning =  false ;

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
                name : "learning" , 
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
// message parameter from resolve

learningCurve().then(function(msg){
    console.log("the promise was resolved " + msg.message );
    console.log("")
}).catch(function(msg){
    console.log(`the promise was rejected ${msg.message}`);
    console.log("")
})



learningCurve().then(function(msg){
    console.log("the resolved promise is " + msg.name );
}).catch(function(msg){
    console.log(`the rejected promise is ${msg.name}`);
})
