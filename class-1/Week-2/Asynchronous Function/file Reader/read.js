const fs = require('fs');

// Use fs.readFile() method to read the file with UTF-8 encoding
fs.readFile('Demo.txt', 'utf8', function (err, data) {
    if (err) {
        console.error("Error reading file:", err);
        return;  // Prevent further execution
    }
    console.log(data); // Output file content as a readable string
});
