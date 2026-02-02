//this new Date() loads the current date in a variable

const currentDate = new Date();

console.log(`the date is: ${currentDate.getDate()}`);
console.log(currentDate.getMonth()+1);
console.log(currentDate.getFullYear());

currentDate.setMonth(5)
console.log(`after setting the month ${currentDate}`);