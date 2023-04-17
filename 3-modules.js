// Commonjs ,every file is module (by default)
// Modules - Encapsulated code(only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utilis");
const data = require("./6-alertnative");
require("./7-mind-grenade");
sayHi(names.john);
sayHi(names.peter);
