function processLine(s) {
    var data, instructions, func, arg1, arg2, result;
    data = s.split(' ')[0];
    instructions = s.split(' ')[1];

    func = instructions[instructions.search(/[\+\-]/)];
    arg1 = parseInt(data.slice(0, instructions.indexOf(func)), 10);
    arg2 = parseInt(data.slice(instructions.indexOf(func)), 10);

    if (func === '+') {
        result = arg1+arg2;
    } else {
        result = arg1-arg2;
    }
    return result;
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(processLine(line));
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
//    test(f, '3413289830 a-bcdefghij', -413289827);
//    test(f, '776 a+bc', 83);
//    test(f, '12345 a+bcde', 2346);
//    test(f, '1232 ab+cd', 44);
//    test(f, '90602 a+bcde', 611);
//
//
//}
//
//
//
//runTests(processLine);
