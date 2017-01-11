let mobiles = [];

mobiles.push('HTC');
mobiles.push('Lenovo');
mobiles.push('Samsung');
mobiles.push('Sony');
mobiles.push('Motorolla');


// for(let i = 0; i < 100 ; i++){
//     if(i == 15) i = 101;
//     mobiles.push(''+i);
// }

for (let i = 0; i < mobiles.length; i++) {
    console.log(` For V1 is ${mobiles[i]}`);
}

for (let mobile of mobiles) {
    console.log(` For V2 is ${mobile} `);
}

mobiles.forEach((mobile, index) => console.log(` For V3 is Mobile is ${mobile} index is ${index}`));

mobiles.forEach(function (mobile, index) {
    console.log(` For V3 index ${index} `);
});

