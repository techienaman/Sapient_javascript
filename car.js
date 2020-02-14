let car={
    make:'Baleno',
    type:'petrol',
    reg_no:'MH08-5655',
    model:2019,

    owner:{
        name:'Prashant',
        city:'Noida',
        zip_code:54554
    },


    printCarDetails:function(){
        return `Make:${this.make},Model:${this.model} and belongs to ${this.owner.name},city:${this.owner.city}`
    }
};
console.log(car.printCarDetails())

//An object can contain a function
