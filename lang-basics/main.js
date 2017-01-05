var carName = 'Bugati'; //variable 
var carSpeed = 1700;
var production = 'VW';

function increaseSpeed() { //defination
    carSpeed = carSpeed + 1;
    console.log('Car Speed is - ' + carSpeed);

    return carSpeed;
}

var speed = increaseSpeed(); //call
console.log('Car Speed is '+speed);
