console.log("this should be first")

function promisifiedFunction(){
    return new Promise(function(resolve){
        setTimeout(function (){
            console.log("this is the third");
            resolve("this is the sixth");
            console.log("this is the fourth");
        },500);
    })
}

console.log("this is second");

promisifiedFunction().then(function(value){
    console.log("this is the fifth")
    console.log(value)
    console.log("this is the last")
})