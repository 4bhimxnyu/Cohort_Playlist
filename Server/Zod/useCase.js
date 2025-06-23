// this will explain how the zod works and the use case of zod and how it makes our code easier to maintain and more readable

const zod = require('zod');

// define an array of number and  print true if all the elements are numbers
function validating(arr){
    const schema = zod.array(zod.number());
    const result = schema.safeParse(arr);
    console.log(result);
}
const array1 = [1, 2, 3];
validating(array1); // should print true
const array2 = [1, '2', 3];
validating(array2); // should print false