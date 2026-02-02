const fs = require('fs');

fs.readFile('utfff.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log("File contents:\n", data);
});
