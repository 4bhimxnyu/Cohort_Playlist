// pop operation in javascript

function popOperation(arr){
    console.log(`the original array is:  ${JSON.stringify(arr)}}`);
    arr.pop();
    console.log(`the updated array: ${JSON.stringify(arr)}`);
}

let students = ["John", "Emma", "Oliver", "Ava"];

popOperation(students);