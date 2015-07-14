function to_int(a) {
    'use strict';
    return parseInt(a, 10);
}

function findSumDist(array, index) {
    'use strict';
    var idx, sum = 0;
    for (idx = 0; idx < array.length; idx += 1) {
        sum += Math.abs(index - array[idx]);
    }
    return sum;

}

var fs = require("fs");
var house, maxHouse, idx, sumDist, minSumDist;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        line = line.split(' ').slice(1).map(to_int);
        maxHouse = 10000;
        minSumDist = 9007199254740992;
        for (idx = 0; idx < maxHouse; idx += 1) {
            sumDist = findSumDist(line, idx);
            if (minSumDist > sumDist) {
                minSumDist = sumDist;
            }
        }
        console.log(minSumDist);
    }
});
