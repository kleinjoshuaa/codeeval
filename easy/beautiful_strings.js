var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(maxBeauty(line));
    }
});


function maxBeauty(a) {
    var arg,counts={},idx,num,sorted,sum;
    arg = a.toUpperCase().split('');
    arg = arg.filter(function (i) {
        return i.match(/[A-Za-z]/) !== null;
    });
    for(idx = 0; idx < arg.length; idx +=1) {
        num = arg[idx];
        counts[num] = counts[num] ? counts[num]+1 : 1;
    }
    sorted = Object.keys(counts).sort(function(a,b){return counts[b]-counts[a]});
    sum = 0;
    for(idx = 0; idx < sorted.length; idx +=1) {
        num = sorted[idx];
        sum += counts[num] * (26-idx);
    }
    return sum;
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
