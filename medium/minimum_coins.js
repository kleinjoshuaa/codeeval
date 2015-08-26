var COINS = [5,3,1];
var total, numCoins, i;

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        numCoins = 0;
        total = parseInt(line, 10);
        for(i = 0; i < COINS.length; i += 1) {
            while (total >= COINS[i]) {
                numCoins += 1;
                total -= COINS[i];
            }
        }
        console.log(numCoins);
    }
});
