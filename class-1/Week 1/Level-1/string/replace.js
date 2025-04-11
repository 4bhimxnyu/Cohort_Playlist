// demonstration of replace function 

function replaceText(str , target , replacement){
    console.log(`this is the original string ${str}`);
    let replaceWord = str.replace(target , replacement);
    console.log(`this is the replacedstring ${replaceWord}`);
}

let sentence = "this is a java function demonstration"

replaceText(sentence , "java" , "javascript");