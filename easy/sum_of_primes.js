/*Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        //do something here
        //console.log(answer_line);
    }
});*/
var i = 3;
var j = 4;
var sum = 5;
while (i <= 1000) {
    if (isPrime(j)) {
        sum += j;
        i += 1
    }
    j += 1
}
console.log(sum)

function isPrime(n) {
    if (n % 6 === 1 || n % 6 === 5) {
        fac = n;
        facr = Math.floor(Math.ceil(Math.sqrt(fac)));
        for (m = 2; m <= facr; m += 1) {
            if (fac % m === 0) {
                var b = 0;
                break;
            }
        }
        if (typeof b === 'undefined') {
            return true;
        }
    }
    return false;
}
