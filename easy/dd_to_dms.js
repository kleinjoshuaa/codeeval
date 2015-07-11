function ddToDms(s) {
    'use strict';
    var ipart, dpart, mpart, spart;
    s = parseFloat(s);

    ipart = parseInt(s, 10);

    mpart = parseInt((s - ipart) * 60, 10);

    spart = parseInt((s - ipart - (mpart / 60.0)) * 3600, 10);

    return ipart + "." + ("00" + mpart).slice(-2) + "'" + ("00" + spart).slice(-2) + '"';
}





var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        console.log(ddToDms(line));
    }
});


//function test(func, testVal, output) {
//    'use strict';
//    if (func(testVal) === output) {
//        console.log('PASSED: test case: ' + testVal);
//    } else {
//        console.log('FAILED: test case: ' + testVal + ' -> ' + func(testVal) + ' !== ' + output);
//    }
//}

//function runTests(f) {
//    'use strict';
//    test(f, '330.39991833', "330.23'59\"");
//    test(f, '0.001', "0.00'03\"");
//    test(f, '14.64530319', "14.38'43\"");
//    test(f, '0.25', "0.15'00\"");
//    test(f, '254.16991217', "254.10'11\"");
//}
//
//
//
//runTests(ddToDms);
