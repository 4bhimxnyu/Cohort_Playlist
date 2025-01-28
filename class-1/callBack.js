// demonstration of callback function

function sum(a,b, callback){
    let added = a+b;

}

function displayActive(displayingText){
    console.log(`the sum is in active form ${displayingText}`);
}

function displayPassive(displayingText){
    console.log(`the sum is in passive form ${displayingText}`);
}

let a = 10;
let b = 5;
let wantedResult = sum(a,b,displayActive);