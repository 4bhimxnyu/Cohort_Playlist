// this is joining/concat

function concatFunction(arr,arr2){
    console.log(`this is the original array 1: ${JSON.stringify(arr)}`);
    console.log(`this is the original array 2: ${JSON.stringify(arr2)}`);
    let resultArray = arr+arr2;
    console.log(`this is the result array: ${JSON.stringify([resultArray])}`);
}

let array1 = [4,23,345,213,435]
let array2 = [1,234,56,78,90,123,456,789]

concatFunction(array1,array2); 