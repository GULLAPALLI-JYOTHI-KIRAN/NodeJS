console.log("I am using npm packages in node project folder");


const lodash=require("lodash");
const names=['ram','kiran']
console.log("Capitalize word in array",lodash.map(names,lodash.capitalize));

