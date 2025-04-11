// this is a slice of the original array

function slicing(Arr,startValue,EndValue){
    console.log(`this is the original array: ${JSON.stringify(Arr)}`);
    let slicedArray = Arr.slice(startValue,EndValue);
    console.log(`this is the sliced array: ${JSON.stringify(slicedArray)}`);
}

let Arr = [1,2,3,4,5,6,7,8,9]
slicing(Arr,2,6);