//var fs  = require("fs");
//fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
//    if (line !== "") {
//        console.log(maxBeauty(line));
//    }
//});


function maxBeauty(a) {
    var arg;
    arg = a.split('');
    arg = arg.filter(function (i) {
        return i.match(/[A-Za-z]/) !== null;
    });
    return arg.length*26;
}

function test(func, testVal, output) {
    if (func(testVal) === output) {
        print('PASSED: test case: '+testVal);
    } else {
        print('FAILED: test case: '+testVal+', '+func(testVal)+' !== '+output);
    }
}

function runTests() {
    test(maxBeauty, 'ABbCcc', 152);
    test(maxBeauty, 'Good luck in the Facebook Hacker Cup this year!', 754);
    test(maxBeauty, 'Ignore punctuation, please :)', 491);
    test(maxBeauty, 'Sometimes test cases are hard to make up.', 729);
    test(maxBeauty, 'So I just go consult Professor Dalves', 646);
}



runTests();
