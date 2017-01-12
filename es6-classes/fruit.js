//ES-6
class Fruit {

    constructor(color){
        this.color = color;
    }

    colorFruit() {
        return this.color;
    }
}

class Apple extends Fruit{
    constructor(color,fromKashmir){
        super(color); // call to parent constructor
        this.fromKashmir = fromKashmir;
    }

    isIt(){
        return this.fromKashmir;
    }    
}

let fr = new Fruit('red');
console.log(`Color is ${fr.colorFruit()}`);

let apple = new Apple('red',true);
console.log(`Is it from Kashmir ${apple.isIt()} color ${apple.colorFruit()}`);