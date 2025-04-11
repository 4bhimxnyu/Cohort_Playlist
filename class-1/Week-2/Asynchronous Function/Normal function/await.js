function calling() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("hi this is a demonstration");
        }, 1000);
    });
}

async function main() {
    let result = await calling();
    console.log(result);
}

main();
