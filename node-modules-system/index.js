/* 
Node Modules Systems
For better code origanize node use modules system instead of coding all code in single file.


Node js mostly use common.js 

for module.export is equall to export statement in js
 and 

 for require() is equall to import {add} from './first-module.js' statement in js
 
This is root module we will be using  */



const firstModule=require("./first-module");

console.log("Addition of two number",firstModule.add(20,30));

console.log("Substraction of two number",firstModule.sub(20,30));


try{

    console.log("trying to divide operations");
    

    // const result=firstModule.div(0,0);
    const result=firstModule.div(0,10);

    console.log("result",result);
    
}
catch(error){
    console.log(error.message);
    
}



/* Module wrapper function means a function automatically wrap your entire code like


// //module wrapper
// (
//     function(exports, require, module, __filename, __dirname){
//         //your module code goes here
//     }
// )


i will create two files wraper-explore and  wraper-demo for to access the file path and  dir name
*/
