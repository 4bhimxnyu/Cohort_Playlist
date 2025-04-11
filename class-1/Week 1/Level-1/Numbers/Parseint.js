// this is how parseInt () works

// let a = "43"
// parse int function will convert a into { let b = 43 }
// basically converts any given string or float value to its integer value


function parsing(value){
    console.log("this is the original value");
    console.log(`${value}`)
    let changedValue = parseInt(value);
    console.log("this is the changed value");
    console.log(`${changedValue}`)
}

parsing("43px");
parsing("90677");
parsing("67.2112");