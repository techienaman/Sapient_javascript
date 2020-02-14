let sum=function(a,b){
    return a+b;
}



let sub=function(a,b){
    return a-b;
}


let product=function(a,b){
    return a*b;
}

let division=function(a,b){
    return a/b;
}

let math=function(fun,a,b){
    fun(a,b)
}



//let result=sum(45,55);
//console.log(`The result is ${result}`);

let mod=function(a,b){
    return a%b;
}

let result=math(mod,15,5);
console.log(`The result is ${result}`)
