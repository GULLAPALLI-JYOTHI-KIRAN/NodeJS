/* Path Module in NodeJs */


/* Every file in the system has a path. On Linux and macOS, a path might look like: /users/joe/file.txt while Windows computers are different, and have a structure such as: C:\users\joe\file.txt

You need to pay attention when using paths in your applications, as this difference must be taken into account.

You include this module in your files using const path = require('node:path'); and you can start using its methods. */


/* Getting information out of a path
Given a path, you can extract information out of it using those methods:

dirname: gets the parent folder of a file
basename: gets the filename part
extname: gets the file extension
 */

const path=require("path");

console.log("Get Current Directory",path.dirname(__filename));


console.log("Get Current File Name",path.basename(__filename))



console.log("Get Specificed file extenstion",path.extname("text.txt"));




//Working with paths
// You can join two or more parts of a path by using path.join():

console.log("Forming Completed File Path ",path.join('/',"node","/",'path-module/'));




console.log("Get Absolute Path",path.resolve("index.js"));


console.log("Get Current absolute path",path.resolve(__filename));


console.log("Specify between path then retrive absolute path",path.resolve("/Nodejs",__filename));


// path.normalize() is another useful function, that will try and calculate the actual path, when it contains relative specifiers like . or .., or double slashes:

console.log("path.normalize() is another useful function, that will try and calculate the actual path, when it contains relative specifiers like . or .., or double slashes:",path.normalize("/hello-world-node/../index.js"));


/* Neither resolve nor normalize will check if the path exists. They just calculate a path based on the information they got. */
