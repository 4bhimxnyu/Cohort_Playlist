// this is a demonstration of how to splice

function Splicefun(arr,startValue, EndValue){
    console.log(`this is the original array: ${JSON.stringify(arr)}`);
    let spliced = arr.splice(startValue,EndValue);
    console.log(`this is the spliced array: ${JSON.stringify(spliced)}`);
}

let arr = [1,2,3,4,5,6,7,8,9]

Splicefun(arr,0,5);