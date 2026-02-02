// asynchronous set timeout function using the logics of promises



function setTimoutActivate(duration){
    let p = new Promise(function(resolve){
        setTimeout(resolve,duration);
    })
    return p;
}
 
const ans = setTimoutActivate(1000);
ans.then(function(){
    console.log("the timeout has been activated");
});


let text = "timeout for a sec becs palakshi is gay";

let result = setTimeout(() => {
    console.log(text);
}, 2000);