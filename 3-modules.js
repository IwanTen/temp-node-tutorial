//CommonJS, every file in node is a module!(by default)
//Modules - encapsulated code (only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alt-flavor");
require("./7-mind-grenade");
console.log(names);
console.log(data);
sayHi("john");
sayHi(names.iwan);
sayHi(names.phoebe);
