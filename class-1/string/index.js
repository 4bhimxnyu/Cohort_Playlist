// this is to find the index of a specific string in a sentence or word

function getIndex(str , target){
    console.log(`the original string value is ${str}`)
    getIndex = str.indexOf(target);
    console.log(`the index of the target string is ${getIndex}`);
}

getIndex("Welcome to the world of JavaScript","world");