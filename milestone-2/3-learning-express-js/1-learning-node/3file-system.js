//fs means file system . fs is a buildin function of node js
const fs = require("fs")

const readFile = fs.readFileSync("./text/read.txt", "utf-8");
//  console.log(readFile)

const writeFile = fs.writeFileSync("./text/write2.png", "This is monir new text");
console.log(writeFile)