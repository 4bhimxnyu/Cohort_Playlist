// this is the parsefloat demonstration
// converts value to its float representation


function parsing(value){
    console.log(`this is the original value: ${value}`);
    let change = parseFloat(value);
    console.log(`this is the float value: ${change}`);
}



parsing("3.14");
parsing("42");
parsing("42px");
