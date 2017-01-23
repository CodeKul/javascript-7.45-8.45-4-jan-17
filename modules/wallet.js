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
            xhttp.open("POST", "https://digital-shelter-153912.firebaseio.com/walletUser.json", true);
            xhttp.send(JSON.stringify({ walletUser: userName }));
        },
        users : (callBack) => {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    callBack(xhttp.responseText);
                }
            };
            xhttp.open("GET", "https://digital-shelter-153912.firebaseio.com/walletUser.json", true);
            xhttp.send();
        }
    };
})();






