//var appModule = ((function(){}))();


var walletService = (() => {
    return {
        webPay: (amt, walletId) => {

        },
        webTopUp: (amt, walletId) => {

        },
        webRegister: (userName) => {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                }
            };
            xhttp.open("POST", "https://angular-demo-d9927.firebaseio.com/walletUser.json", true);
            xhttp.send(JSON.stringify({ walletUser: userName }));
        }
    };
})();






