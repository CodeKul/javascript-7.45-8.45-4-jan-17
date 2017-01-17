var walletModule = ((wsWallet) => {
    'use strict';

    //return () => {}; // function
    return {
        pay: (amt, walletId) => wsWallet.webPay(amt, walletId),
        topUp: (amt, walletId) => wsWallet.webTopUp(amt, walletId),
        register: (userName) => wsWallet.webRegister(userName)
    }; // obj literal
})(walletService);


walletModule.register('c++');