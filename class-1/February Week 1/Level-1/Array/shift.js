// shift operation

function firstOut(arr){
    console.log(`this is the orignal array: ${JSON.stringify(arr)}`);
    arr.shift();
    console.log(`this is modified array: ${JSON.stringify(arr)}`);
}


firstOut([1,2,3,4,5]);