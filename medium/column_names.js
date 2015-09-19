function numToCol(number) {
    var num, colIdx, result = [], ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    num = parseInt(number, 10);
    if (num > Math.pow(26,2)) {
        colIdx = Math.floor(num / Math.pow(26,2));
        result.push(ALPHA[colIdx-1]);
        num -= colIdx * Math.pow(26,2);
    }
    if (num > Math.pow(26,1)) {
        colIdx = Math.floor(num / Math.pow(26,1));

        if(colIdx !== num/Math.pow(26,1)) {
            result.push(ALPHA[colIdx-1]);
            num -= colIdx * Math.pow(26,1);
        } else {
            result.push(ALPHA[colIdx-2]);
            num -= ((colIdx-1) * Math.pow(26,1));
        }
    }
    result.push(ALPHA[num-1]);

    return result.join('');
}




var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        console.log(numToCol(line));
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
//function runTests(func) {
//    test(func, 27, 'AA');
//    test(func, 28, 'AB');
//    test(func, 52, 'AZ');
//    test(func, 3702, 'ELJ');
//
//}
//
//
//
//runTests(numToCol);
