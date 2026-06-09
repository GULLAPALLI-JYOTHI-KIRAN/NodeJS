/* File System */

/* The Node.js File System module (fs) provides a comprehensive set of methods for working with the file system on your computer.

It allows you to perform file I/O operations in both synchronous and asynchronous ways. */


const fs=require("fs");
const path=require("path")

const folderPath=path.join(__dirname,"NewFolder");



/* Reading Files Synchronously
For simple scripts, you can use synchronous methods, but avoid them in production servers as they block the event loop: */
// check the directory available or not
if(!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath);

    console.log("Directory filed successfully");
}

const filePath=path.join(folderPath,"Sample.txt")
fs.writeFileSync(filePath,"This Is File Modlue System in Node js.","utf-8")

console.log("Data inserted successfully");

let textInside=fs.readFileSync(filePath,"utf-8");
console.log("Content :: ",textInside);

// append new content to exisiting content

fs.appendFileSync(filePath,"\n This New Line are added to this.","utf-8")
textInside=fs.readFileSync(filePath,"utf-8");

console.log("New Content :: ",textInside);


/* Asyn operation mostly used EveryTime */

const asyncFilePath=path.join(folderPath,"Asyn-file.txt");
 fs.writeFile(asyncFilePath,"This is async Operation in file system",(err)=>{
    if(err){
        throw(err);
        
    }
    console.log("Data is added successfully ");

  fs.readFile(asyncFilePath,"utf-8",(err,data)=>{
       if(err){
       throw (err);
        
    } 
    
    console.log("Read Data",data);

    fs.appendFile(asyncFilePath,"\n This async new line operation",(err)=>{
        if(err){throw err}

        console.log("New Data  added successfully");
        
    })
     
    })
    
 })


