var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        //do something here
        console.log(isSd(line) ? 1 : 0);
    }
});

function isSd(n) {
    var nAry,i,result;
    nAry = (''+n).split('');
    return nAry.every(function (elem,index,array) {
         return (''+countElement(index,array) === ''+elem);
    });
}


function countElement(elem,array) {
 return array.filter(function(a) {return (''+a) === (''+elem)}).length;
}



function runTests() {
    test(isSd,2020,true);
    test(isSd,22,false);
    test(isSd,1210,true);
    test(isSd,42101000,true);
    test(isSd,939529,false);
}

function test(func,testVal,output) {
 if (func(testVal) === output) {
  print('PASSED: test case: '+testVal);
 } else {
  print('FAILED: test case: '+testVal+', '+func(testVal)+' !== '+output);
 }
}

runTests();
