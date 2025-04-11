// converting an array using arrow function and multiplying it by 2

const initial = [1,2,3,4,5];
const final = []

const arrow = (value1, value2)=>{
    for(let i = 0; i < value1.length ; i++){
        let m = value1[i];
        let n = m*2;
        value2[i] = n
    }
    return value2 ;
}

let changer = arrow(initial,final);
console.log(changer);