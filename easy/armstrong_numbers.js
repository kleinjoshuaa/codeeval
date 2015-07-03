var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(isArmstrong(parseInt(line,10))? 'True' : 'False');
    }
});


function isArmstrong(n) {
    var nAry;
    nAry = ('' + n).split('');
    return nAry.reduce(function (prev, current, idx, array) {
        return prev + Math.pow(current, array.length);
    }, 0) === n;
}

function test(func, testVal, output) {
    if (func(testVal) === output) {
        print('PASSED: test case: '+testVal);
    } else {
        print('FAILED: test case: '+testVal+', '+func(testVal)+' !== '+output);
    }
}

function runTests() {
    test(isArmstrong, 6, true);
    test(isArmstrong, 153, true);
    test(isArmstrong, 351, false);
}



runTests();
