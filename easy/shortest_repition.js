function findPeriod(s) {
    var idx;
    for (idx = 1; idx < s.length; idx += 1) {
        if (s.lastIndexOf(s.slice(0, idx)) !== s.lastIndexOf(s.slice(0, idx + 1))) {
            break;
        }
    }
    return idx;
}


//function test(func, testVal, output) {
//    if (func(testVal) === output) {
//        console.log('PASSED: test case: '+testVal);
//    } else {
//        console.log('FAILED: test case: '+testVal+', '+func(testVal)+' !== '+output);
//    }
//}
//
//function runTests(f) {
//    test(f, 'abcabcabcabc', 3);
//    test(f, 'bcbcbcbcbcbcbcbcbcbcbcbcbcbc', 2);
//    test(f, 'dddddddddddddddddddd', 1);
//    test(f, 'adcdefg', 7);
//}
//
//
//
//runTests(findPeriod);
////
//
//
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(findPeriod(line));
    }
});
