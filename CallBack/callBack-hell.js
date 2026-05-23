/* CallBack Hell */
console.log("This is CallBack hell");

const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error in reading the file");
  }
  console.log(data);

  const modifyFileData = data.toUpperCase();

  fs.writeFile("output.txt", modifyFileData, (err) => {
    if (err) {
      console.log("Error in Writing the file");
    }
    fs.readFile("output.txt", "utf-8", (err, data) => {
      if (err) {
        console.log("Error in reading the file");
      }
      console.log(data);
    });
  });
});
