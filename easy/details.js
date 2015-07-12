function findShortestDist(field) {
    'use strict';
    var idx, dist = [],
        idx2, maxX, minY, row;
    field = field.split(',');
    for (idx = 0; idx < field.length; idx += 1) {
        maxX = 0;
        minY = field[0].length;
        row = field[idx];
        for (idx2 = 0; idx2 < row.length; idx2 += 1) {
            if (row[idx2] === 'X' && idx2 > maxX) {
                maxX = idx2;
            }
            if (row[idx2] === 'Y' && idx2 < minY) {
                minY = idx2;
            }
        }
        dist.push(minY - maxX);
    }
    return dist.sort()[0] - 1;
}


//var fs = require("fs");
//fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
//    'use strict';
//    if (line !== "") {
//        console.log(findShortestDist(line));
//    }
//});


function test(func, testVal, output) {
    'use strict';
    if (func(testVal) === output) {
        console.log('PASSED: test case: ' + testVal);
    } else {
        console.log('FAILED: test case: ' + testVal + ' -> ' + func(testVal) + ' !== ' + output);
    }
}

function runTests(f) {
    'use strict';
    test(f, 'XX.YY,XXX.Y,X..YY,XX..Y', 1);
    test(f, 'XXX.YYYY,X...Y..Y,XX..YYYY,X.....YY,XX....YY', 1);
    test(f, 'XX...YY,X....YY,XX..YYY,X..YYYY', 2);
    test(f, 'XXYY,X..Y,XX.Y', 0);
}



runTests(findShortestDist);
