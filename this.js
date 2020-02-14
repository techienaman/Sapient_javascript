let sum=function(c,d){
  //  console.log(this)
    return this.a+this.b+c+d;
}

let obj1={a:1,b:2};
let obj2=[3,4];

let func=sum.bind(obj1,1,2);
let result=func();
console.log(`The result is ${result}`);
obj1.a=100;
obj1.b=200;
 result=func();
console.log(`The result is ${result}`);
