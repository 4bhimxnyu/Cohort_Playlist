// demonstration of callback function

function sum(a,b, callback){
    let added = a+b;
    callback(added); //fixed a bug here
}

function displayActive(displayingText){
    console.log(`the sum is in active form ${displayingText}`);
}

function displayPassive(displayingText){
    console.log(`the sum is in passive form ${displayingText}`);
}


let wantedResult = sum(5,10,displayPassive);
let newResult = sum(2,4,displayActive);