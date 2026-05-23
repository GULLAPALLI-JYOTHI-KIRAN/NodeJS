/* CallBack area same definition in Js and NodeJs */

/* Example */

function Person(name, callBackFn) {
  console.log("Hello ,This is me", name);
  callBackFn();
}
function address() {
  console.log("India");
}

Person("John", address);

const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error in reading the file");
  }
  console.log(data);
});
