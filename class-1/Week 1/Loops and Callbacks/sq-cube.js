function sqaure(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function addSumCube(value1 , value2 , cb){
    let val1 = cb(value1)
    let val2 = cb(value2)
    return val1+ val2;
} 

let sq_answer = addSumCube(2,3,sqaure)
let cube_answer = addSumCube(3,2,cube)
console.log(sq_answer);
console.log(cube_answer);