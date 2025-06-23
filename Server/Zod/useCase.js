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


// define an object with a name and age and print true if the name is a string and age is a number
function validatingObject(obj){ 
    const schema = zod.object({
        name: zod.string(),
        age:zod.number(),
        password : zod.coerce.string().min(8, "Password must be at least 8 characters long")
    });
    const result = schema.safeParse(obj);
    console.log(result);
}
 
const object1 = {name:"abhimanyu",age:19,password:"12345678"};
validatingObject(object1); // should print true
const object2 = {name:"abhimanyu",age:"19",password:"1234567"};
validatingObject(object2); // should print false