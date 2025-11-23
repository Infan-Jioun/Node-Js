const { error } = require('console');
const fs = require('fs');
const content1 = "this is content \n node js very awesome runtime";
try {
    fs.writeFileSync("./output/test-sync.txt", content1)
    console.log("File running sync");
} catch (error) {
    console.error(error.message)
}
// Async

const content2 = "this is content  \n node js with async awosome runtime";
fs.writeFile("./output/test-async.txt", content2, error => {
    if (error) {
        console.error(error.message)
    } else {
        console.log("File running with async");
    }
})
