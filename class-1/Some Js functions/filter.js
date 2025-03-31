// filter function filters all the different variables

// here filter is going to filter out all the even numbers in the array

let oldArr = [1,2,3,4,5,6,7,8,9,10];



function filterLogic(i){
    
        if(i%2==0){
            return true;
        }
        else{
            return false;
        }
    
}

let newArr = oldArr.filter(filterLogic);

console.log(newArr);

