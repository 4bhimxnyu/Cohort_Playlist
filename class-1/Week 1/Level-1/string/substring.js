// substring method in javascript

function substringtarget(str, start , end){
    console.log(`this is the original string value: ${str}`);
    let getsubstring = str.substring(start ,end);
    console.log(`this is the substring value: ${getsubstring}`);
}

substringtarget("hello this is javascript and it is different from java", 0 , 24);