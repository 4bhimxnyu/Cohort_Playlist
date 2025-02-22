console.log("this should be first")

function promisifiedFunction(){
    return new Promise(function(resolve){
        setTimeout(function (){
            resolve("this is the last");
        },2000);
    })
}

console.log("this is second");

promisifiedFunction().then(function(value){
    console.log(value)
})