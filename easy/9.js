//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(fib(line));
    }
});

function fib(n) {
    var fibAry = [0,1,1];
    while (fibAry.length <= n) {
     fibAry.push(fibAry[fibAry.length-1]+fibAry[fibAry.length-2]);
    }
    return fibAry[n];
}

//tests
function runTests() {
if (fib(5) === 5) {
    print('fib 5 test passed');
} else {
  print('fib 5 failed at '+fib(5));
}

if (fib(12) === 144) {
    print('fib 12 test passed');
} else {
    print('fib 12 failed at '+fib(12));
}
}

runTests();
