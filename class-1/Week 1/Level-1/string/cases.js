// this function is to demonstrate the use of upper and lower case respectively of a string

function upper(str){
    console.log(`this is the original string`)
    console.log(`${str}`);
    let change = str.toUpperCase();
    console.log(`this is the string in uppercase`);
    console.log(`${change}`);
}

function lower(str){
    console.log(`this is the original string`);
    console.log(`${str}`);
    let change = str.toLowerCase();
    console.log(`this is the string in Lowercase`);
    console.log(`${change}`);
}


let sentence = "HrllO ThIS iS A DeMoNstRAtiOn Of ThE UpPeR AnD LoWEr CaSE FuNctiOnS In JaVaScRiPt"

upper(sentence);
lower(sentence);