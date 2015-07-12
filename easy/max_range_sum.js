function reduce_sum(prev, cur, idx, ar) {'use strict'; return prev + cur; }
function to_int(a) {'use strict'; return parseInt(a, 10); }

var fs  = require("fs");
var windw, sum, days, idx, maxSum;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        line = line.split(';');
        windw = parseInt(line[0], 10);
        days = line[1].split(' ');
        days = days.map(to_int);
        maxSum = 0;
        for (idx = 0; idx + windw <= days.length; idx += 1) {
            sum = days.slice(idx, idx + windw).reduce(reduce_sum);
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
        console.log(maxSum);
    }
});
