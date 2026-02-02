// unshift operation

function unshiftOperation(arr, val) {
    console.log(`this is the original array: ${JSON.stringify(arr)}`);
    arr.unshift(val);
    console.log(`this is the modified array: ${JSON.stringify(arr)}`);
    return arr;
}

let studentsRank = ["abhi" , "john" , "doe" , "javascript"];

unshiftOperation(studentsRank, "python");