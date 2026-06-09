console.log("Node Module wrapper in wraper-explore");

console.log("__filename in wraper-explore",__filename)
console.log("__direname in wraper-explore",__dirname)

//Named export
module.exports.greet=(wish)=>{
    console.log(wish);
    
}
