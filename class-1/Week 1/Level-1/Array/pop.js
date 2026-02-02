// pop operation in javascript

const { json } = require("zod/v4");

function popOperation(arr){
    console.log(`the original array is:  ${JSON.stringify(arr)}}`);
    arr.pop();
    console.log(`the updated array: ${JSON.stringify(arr)}`);
}

let students = ["John", "Emma", "Oliver", "Ava"];

function manual(arr){
    console.log(`this is the original array in manual func ${JSON.stringify(arr)}`);
    let r = arr.length;
    for(let i = 0 ; i<= r ; i++ ){
        arr[r] = arr[r-1];
        break;
    }
    console.log(`new array formed ${JSON.stringify(arr)}`);
}

manual(students);
popOperation(students);