var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(isHappy(line));
    }
});

function isHappy(n) {
    var sum,list;
    list = [];
    sum = sumDigits((''+n).split(''));
    while (sum !== 1) {
        sum = sumDigits((''+sum).split(''));
        if (list.indexOf(sum) === -1) {
            list.push(sum);
        } else {
            return 0;
        }
    }
    return 1;
}

function sumDigits(a) {
     return  a.reduce(function(prev,current,index,fullA) {
          return prev + current*current;
       }, 0);
}


function runTests() {
    test(isHappy,1,1)
    test(isHappy,7,1)
    test(isHappy,22,0)
}

function test(func,testVal,output) {
 if (func(testVal) === output) {
  print('PASSED: test case: '+testVal);
 } else {
  print('FAILED: test case: '+testVal);
 }
}

runTests();
