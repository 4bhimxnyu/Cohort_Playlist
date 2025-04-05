// creating a Promise 

// promise has three cases - { pending , resolve , reject }

let Promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){

        // resolve is working

        resolve("done after a second");
        console.log("reject is neglected as resolve is resolving the promise already")
        reject("rejected after a second");
        }, 1000);
})

function main(){
    console.log(Promise1);
}

console.log(Promise1);

Promise1.then(main)
Promise1.catch(main)