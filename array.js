let ages=[12,34,56,67,89,45]
let ageLT15=function(age){
    return age<15
}


let ageLT60=function(age){
    return age>60
}



let ageGt18=ages.filter(function(age){               //It will return an array
    return age>18
})

console.log(ageGt18)
 
ages.filter( age  => age < 40). map(age => age * age ).forEach((v) => console.log(v));












