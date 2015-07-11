function lineToNum(s) {
    'use strict';
    var num = '',
        lastNum, idx, idx2;
    s = s.split(' ');
    for (idx = 0; idx < s.length; idx += 1) {
        if (idx % 2 === 0) {
            s[idx] === '0' ? lastNum = 0 : lastNum = 1;
        } else {
            idx2 = 0;
            while (idx2 < s[idx].length) {
                num += lastNum;
                idx2 += 1;
            }
        }
    }
    return (parseInt(num, 2));
}


var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        console.log(lineToNum(line));
    }
});


//function test(func, testVal, output) {
//    if (func(testVal) === output) {
//        console.log('PASSED: test case: '+testVal);
//    } else {
//        console.log('FAILED: test case: '+testVal+', '+func(testVal)+' !== '+output);
//    }
//}
//
//function runTests(f) {
//    test(f, '00 0 0 00 00 0', 9);
//    test(f, '00 0', 1);
//    test(f, '00 0 0 000 00 0000000 0 000', 9208);
//    test(f, '0 000000000 00 00', 3);
//}
//
//
//
//runTests(lineToNum);
