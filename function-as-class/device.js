//pre ES-6
function Device(model, name) { 
    this.model = model;
    this.name = name;

    function my(){
        console.log(`I am my`);
    }

    my();
}

Device.prototype.print = function(){
    console.log(` Model - ${this.model} Name - ${this.name}`);
}

let device = new Device(1,'Micro');
device.print();