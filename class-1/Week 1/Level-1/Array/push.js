// push function 

function pushValues(arr , element){
    console.log(`this is the original array: ${JSON.stringify(arr)}`);
    arr.push(element);
    console.log(`this is the modified array: ${JSON.stringify(arr)}`);
}


let arr = [45,54,89,32,43]
pushValues(arr, 98);