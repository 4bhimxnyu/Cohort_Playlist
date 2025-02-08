function square(n){
    return n*n ;
}

function addingSq(value1,value2){
    let val1 = square(value1);
    let val2 = square(value2);
    let sum = val1 + val2;
    return sum;
}

let answer = addingSq(2,3);
console.log(answer);