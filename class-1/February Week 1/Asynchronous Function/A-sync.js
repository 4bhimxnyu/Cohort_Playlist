// demonstration of set timout function which is an asynchronous function by javascript

function calculateSum(n){
    let ans = 0;
    for(let i = 0 ; i <= n; i++){
        ans+=i;
    }
    return ans;
}

function Calculation(){
    console.log(calculateSum(100))
}

setTimeout(Calculation , 1000);
console.log("the setTimeout function will run after 1 second");