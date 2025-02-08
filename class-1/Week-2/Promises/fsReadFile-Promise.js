const fs = require('fs');

function calling(){
    return new Promise(function(resolve){
      fs.readFile('text.txt', 'utf-16le' , function(err,data){
        resolve(data)
      })  
    })
}

function onDone(data){
    console.log(data)
}

calling().then(onDone);