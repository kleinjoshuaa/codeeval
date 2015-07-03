/*Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        //do something here
        //console.log(answer_line);
    }
});*/

var i = 1000

while (i>0) {
    if(isPrime(i) && isPal(i)) {
        console.log(i);
        break;
    }
    i -=1
}

function isPrime(n) {
        if (n % 6 === 1 || n % 6 === 5) {
        //print(factors[k]+" is of the form 6k+-1, checking primality");
        fac = n;
        facr = Math.floor(Math.ceil(Math.sqrt(fac)));
      //  print("checking integers up to " + facr);
        for (m = 2; m < facr; m += 1) {
            // print("checking "+m);
            if (fac % m === 0) {
               // print(m + " divides factor " + fac + ", so " + fac + " is not a prime factor");
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

function isPal(n) {
    return n === parseInt(n.toString().split('').reverse().join(''),10);

}
