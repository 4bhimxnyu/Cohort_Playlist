// this is demonstration of the split function in javascript 

function splitSen(str , splitValue){
    console.log(`this is the original string ${str}`);
    let word = str.split(splitValue);
    console.log(`this is the splited sentence `);
    console.log(`${word}`)
}

let sentence = "this is demonstration of the split function in javascript"
 
splitSen(sentence , "split");