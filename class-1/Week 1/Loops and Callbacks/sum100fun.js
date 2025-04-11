function sum(n){
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum +=i; 
    }
    return sum;
}

let answer = sum(100)
console.log(answer);