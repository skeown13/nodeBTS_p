// console.log(arguments)
// console.log(require("module").wrapper)

// module.exports
const C = require("./test-module-1")
const calc1 = new C()
console.log(calc1.add(4, 5))

// exports
// const calc2 = require("./test-module-2")
// destructuring to destructure the object that we get - must be the exact same name as in the original object
const { add, subtract, multiply, divide } = require("./test-module-2")
console.log(add(3, 5))

// caching
require("./test-Module-3")()
require("./test-Module-3")()
require("./test-Module-3")()