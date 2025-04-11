// demonstration of set timout function

const { clerkJsScriptUrl } = require("@clerk/clerk-react/internal");

function greet(){
    console.log("this message will repeat after 2 seconds");
}

setTimeout(greet, 2000)




