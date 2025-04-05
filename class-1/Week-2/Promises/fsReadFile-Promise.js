const fs = require('fs');

function calling() {
    return new Promise(function (resolve, reject) {
        fs.readFile('text.txt', 'utf-8', function (err, data) {
            if (err) {
                reject(err); // Rejecting the Promise if an error occurs
            } else {
                resolve(data);
            }
        });
    });
}

function onDone(data) {
    console.log(data);
}

function onError(error) {
    console.error("Error reading file:", error);
}

// Handling both success and error cases
calling().then(onDone).catch(onError);
