function myFun(incomingFun) {
    incomingFun(); // call to otherFun indirectly.

    return yetAnother; // returning function from other function
}

function otherFun() {
    console.log('I am Other Fun');
}

myFun(otherFun); // i am passing function as parameter

function yetAnother() {
    console.log('I am yet another');
}

var myData = yetAnother; // assigning function to variables
myData();

var retFun = myFun(otherFun)// here it will return function
retFun();