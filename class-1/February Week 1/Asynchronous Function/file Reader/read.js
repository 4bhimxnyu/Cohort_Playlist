const fs = require('fs');

// Use fs.readFile() method to read the file
fs.readFile('demo.txt', function(err, data) {
    console.log(data);
})