// demonstration of how map works in javascript

// converting array value 
const input = [1,2,3,4,5];

function convert(i){
    return i*2 ;
}

const ans = input.map(convert);
console.log(ans);