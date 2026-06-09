function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mul(a,b){
    return a*b
}

function div(a,b){
    if(b==0){
        throw new Error("Zero is not divisible by zero")
    }

    return a/b;
}

/* To export this code into modules as follows */

module.exports={
add,
sub,
mul,
div
}
