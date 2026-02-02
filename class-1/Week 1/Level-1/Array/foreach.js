let array1 = [1, 2, 3, 4, 5];

function logThing(item){
    console.log(item)
}

function logagain(arr){
    for(let i = 0 ; i <= arr.length; i++){
        console.log(arr[i]);
    }
}

let result = logagain(array1);
console.log(result);
array1.forEach(logThing);