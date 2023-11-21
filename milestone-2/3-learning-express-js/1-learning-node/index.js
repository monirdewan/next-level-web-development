
//local Modules
const {a, add} = require('./local-1')

//when two variable name will be same than we have to change name this away like a:a2
const {a:a2, add:add2} = require('./local-2')

console.log(a)


//builtine modules

const path = require("path")

// console.log(path.dirname("/E:/next-level-web-development/mileston/milestone-2/3-learning-express-js/1-learning-node/index.js"))

// console.log(path.parse("/E:/next-level-web-development/mileston/milestone-2/3-learning-express-js/1-learning-node/index.js"))

console.log(path.join("/E:/next-level-web-development/mileston/milestone-2/3-learning-express-js/1-learning-node/", "local-2.js"))

