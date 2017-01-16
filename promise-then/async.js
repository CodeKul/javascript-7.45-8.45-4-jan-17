let fut = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Android');
    }, 1500);
}).then(data => {
    console.log(`Resolved data id ${data}`);
    return () => 'CodeKul';
}).then(funData => console.log(`bubble is ${funData()}`))
.catch(e => {
    console.log(`Rejected data id ${e}`);
});


function future(anyFun) {
    setTimeout( anyFun ,1500);
    //return anyFun();
};

var myData = future(function () {
   console.log(`called`);

   return function () {
       return 'Hello';
   };
});

// future(() => {
//      console.log(`called lambda`);
// });

console.log(`Myy Data is ${myData}`)


