"use strict";

var i = undefined;

console.log(`i is ${i}`);
console.log(`i is ${i * 10}`);
console.log(`i is ${10 * 10}`);

let os = [];
os[0] = 'Android';
os[1] = 'iOS';
os[2] = 'Rim';
os[3] = 'Symbian';

console.log(`oth is ${os[0]}`);
console.log(`oth is ${os[1]}`);

for(let i = 0; i < os.length ;i++){
    console.log(`${i}th is ${os[i]}`);
}

os['1'] = 'one';
os['2'] = 'two';
console.log(`Text is  ${os['1']}`);

let words = [
    'hello', 'hi', 'how', 'are', 'you'
];
words['assertive'] = 'I am boss';

for(let i = 0; i < words.length; i++){
    console.log(`Word is ${words[i]}`);
}

console.log(`Sentence is ${words['assertive']}`);