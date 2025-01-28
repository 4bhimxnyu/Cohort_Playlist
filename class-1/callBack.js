// demonstration of callback function

function sum(a,b, callback){
    let added = a+b;
    callback(added);
}

function displayActive(displayingText){
    console.log(`the sum is in active form ${displayingText}`);
}

function displayPassive(displayingText){
    console.log(`the sum is in passive form ${displayingText}`);
}


let wantedResult = sum(5,10,displayPassive);