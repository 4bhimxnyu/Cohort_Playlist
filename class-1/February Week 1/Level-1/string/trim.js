// trim function demonstration 

function trimText(str){
    console.log(`this is the original string `);
    console.log(`${str}`);
    let trimWord = str.trim();
    console.log(`this is the trimmed string`);
    console.log(`${trimWord}`);
}

let sentence = "   this is a demonstration of the trim function in javascript   "

trimText(sentence);