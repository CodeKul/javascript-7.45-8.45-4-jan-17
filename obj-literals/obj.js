let car = {
    name : 'Audi',
    price : 45,
    model : 'A7' ,
    print : function() {
        console.log(`Name - ${this.name} price - ${this.price} Model - ${this.model}`);
    } 
}

car.name = 'Mercedez'
car.price =78
car.model = 'E6' 
car.print()

for(let xyz in car) {
    console.log(`Key is ${xyz} values ${car[xyz]}`)
}



 