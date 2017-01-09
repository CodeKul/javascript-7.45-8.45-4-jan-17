"use strict"; // need to write var before variables names, means no automatic globals

var i = 10; // global variable
i = false;
i = 'Android';
i = 45.90;
i = simpleFun;

const itIs = 50;

console.log('Value of i is ' + i);

var sal = 500;

function simpleFun() {
    "use strict";

    var j = 10; // automatically global
    i = 100;
    var sal = 400; // local
}

simpleFun();

console.log('Value of sal ' + sal);

let empId = 10;
let empName = 'android';

if (true) { let empId = 20; }

console.log('Emp Id ' + empId);
console.log(`(v2) . Emp Id is ${empId}`);