// unshift operation

function unshiftOperation(arr, val) {
    console.log(`this is the original array: ${JSON.stringify(arr)}`);
    let modified = arr.unshift(arr,val);
    console.log(`this is the modified array: ${JSON.stringify(modified)}`);
}

let studentsRank = ["abhi" , "john" , "doe" , "javascript"];

unshiftOperation(studentsRank, "python");