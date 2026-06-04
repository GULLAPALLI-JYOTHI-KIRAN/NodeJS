// To run node code in 2 way 

/* 
First Method

Open CMD ternimal
type node
Welcome to Node.js v25.8.2.
Type ".help" for more information.
>console.log("Hello World");
Hello World
undefined
>2+2
4
this is basic one
*/

/* Vs Code Important 


Create Folder and inside the folder create a file callled index.js

In Index.js file  type this below console.

File name can be any name like index.js ,add.js ,sum.js


To run the file on  terminal navigate to folder path containing this file

node filename.js
node index.js

*/


console.log("Hello World this is my Node Code running from Vs Code Ternimal.");


const array=[10,"20","Car",true,0,undefined,NaN];

console.log("Array ", array);



setTimeout(()=>{
    console.log("This code will run after 2 minutes");
    
},2000)


console.log("This is asyn code this code run before 2 minutes code run");
