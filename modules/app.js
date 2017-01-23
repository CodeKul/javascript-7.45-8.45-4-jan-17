var walletModule = ( wsWallet => {
    'use strict';

    //return () => {}; // function
    return {
        pay: (amt, walletId) => wsWallet.webPay(amt, walletId),
        topUp: (amt, walletId) => wsWallet.webTopUp(amt, walletId),
        register: (userName) => wsWallet.webRegister(userName),
        users : (callBack) => wsWallet.users(callBack)
    }; // obj literal
})(walletService);

document.getElementById('btnRegister').onclick = () => walletModule.register(document.getElementById('textUser').value);
document.getElementById('btnUsers').onclick = () => {
    walletModule.users( (users) => {
        let obj = JSON.parse(users);
        for(val in obj) {
            let div = document.createElement('div');
            div.innerHTML = "<hr><h3><a>"+ obj[val]['walletUser'] +'</a></h3>';
            document.getElementById('divUsers').appendChild(div);
        }
    });
};