const { summary } = require("framer-motion/client")

let sum = 0

for(let i = 1 ; i <=100;i++){
    sum += i
}

console.log(`the sum of first 100 number is ${sum}`)