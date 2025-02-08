const user1 = {
    name:"abhi",
    age:"18",
    gender :"male"
}

console.log(user1["name"]);

// JSON.STRINGIFY(object) converts object into string

const finalString = JSON.stringify(user1)
console.log(finalString);

// JSON.parse(str) converts string into object


const parsedString = JSON.parse(finalString)
console.log(parsedString);