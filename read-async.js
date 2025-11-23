const fs = require("fs");
console.log("start Reading.....");
fs.readFile("./diary.txt", (error, data) => {
    if (error) {
        console.error("error happend", error.message);
    }
    console.log("file content");
    console.log(data);
})
console.log("Time runs immediatly - no blocking");