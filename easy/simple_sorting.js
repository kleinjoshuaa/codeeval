var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    var args;
    if (line != "") {
        console.log(ceSort(line));
    }
});

function ceSort(s) {
    return s.split(' ')
            .map(function(a) {
                    return parseFloat(a).toFixed(3);
                })
            .sort(function (a, b) { return a-b; })
            .join(' ');
}


function test(func, testVal, output) {
    if (func(testVal) === output) {
        console.log('PASSED: test case: '+testVal);
    } else {
        console.log('FAILED: test case: '+testVal+', '+func(testVal)+' !== '+output);
    }
}

function runTests() {
    test(ceSort, '70.920 -38.797 14.354 99.323 90.374 7.581', '-38.797 7.581 14.354 70.920 90.374 99.323');
    test(ceSort, '-37.507 -3.263 40.079 27.999 65.213 -55.552', '-55.552 -37.507 -3.263 27.999 40.079 65.213');

}



runTests();
