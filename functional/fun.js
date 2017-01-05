function myFun(incomingFun) {
    incomingFun(); // call to otherFun indirectly.

    return yetAnother; // returning function from other function
};

function otherFun() {
    console.log('I am Other Fun');
};

myFun(otherFun); // i am passing function as parameter

function yetAnother() {
    console.log('I am yet another');
};

var myData = yetAnother; // assigning function to variables
myData();

var retFun = myFun(otherFun)// here it will return function
retFun();

var ano = function() {
    console.log('I anonymus function');
};

ano();

var anoLambda = () =>  console.log('I am lambda')
anoLambda();

var returningLambda = () => 10;

// returningLambda = function() {
//     return 10;
// }
console.log('Return Value - '+returningLambda());

var square = (x) => x*x;
square(10);

myFun(square);
myFun(x => x*x*x);
myFun(function(){
});

console.log(anoLambda);