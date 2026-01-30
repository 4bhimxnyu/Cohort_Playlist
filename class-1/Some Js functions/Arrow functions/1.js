// this is how the normal function works
function product(a,b){
    return a*b;
}

let amt_prod = product(3,4);
console.log(amt_prod)


// this is how arrow function works

const sum = (a,b) =>{
    return a+b;
}

const ans = sum(3,4);
const secondans = product(5,7);
console.log(secondans);
console.log(ans);