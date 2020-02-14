Details=[
{
    id:1,
    name:'Mayank',
    salary:75000
},
{
    id:2,
    name:'Naman',
    salary:65000
},
{
    id:3,
    name:'Danish',
    salary:15000
},
{
    id:4,
    name:'Dikbijay',
    salary:45000
},
{
    id:5,
    name:'Harshit',
    salary:1005000
},
{
    id:6,
    name:'Piyush',
    salary:1135000
},

{
    id:7,
    name:'Gaurav',
    salary:15000
},
{
    id:8,
    name:'anshul',
    salary:85000
},
{
    id:9,
    name:'Mayank',
    salary:25000
},
{
    id:10,
    name:'prashant',
    salary:2335000
}]



let result= Details.filter(function(Details){
    return Details.salary>50000 && Details.salary<100000 
})
let result1=result.map(function(result){
    return result.name
})
result1.forEach((v) => console.log (v));


