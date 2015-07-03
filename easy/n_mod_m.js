var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    var args;
    if (line !== "") {
        args = line.split(',');
        console.log(nModM(parseInt(args[0],10),parseInt(args[1],10)));
    }
});


function nModM (n,m) {
    var idx = n;
    while (idx >= m) {
     idx -= m;
    }
    return idx;
}



function runTests() {
   var i,j;
    for (i = 0; i < 100; i +=1) {
        for (j = 1; j < 100; j+=1) {
            test(nModM,[i,j],i%j);
        }
    }
}

function test(func,testVal,output) {
 if (func(testVal[0],testVal[1]) === output) {
  print('PASSED: test case: '+testVal);
 } else {
  print('FAILED: test case: '+testVal+', '+func(testVal[0],testVal[1])+' !== '+output);
 }
}

runTests();
