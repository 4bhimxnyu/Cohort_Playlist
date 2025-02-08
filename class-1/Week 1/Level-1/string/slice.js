// slicing the array in javascript

function slicetarget(str, start , end){
    console.log(`this is the original string value: ${str}`);
    let sliceTarget = str.slice(start ,end);
    console.log(`this is the sliced string value: ${sliceTarget}`);
}

slicetarget("hello this is javascript and it is different from java", 0 , 5);