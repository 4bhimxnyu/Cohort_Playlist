// this program is used to find the lastindex of the target string in the original string

function getlastIndex(str, target){
    console.log(`this is the original string value: ${str}`);
    let getIndex = str.lastIndexOf(target);
    console.log(`the last index of the target value is ${getIndex}`);
}

getlastIndex("hello this is javascript and it is different from java","java");