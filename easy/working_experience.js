function monToNum(s) {
    'use strict';
    var yr, mon, months, result;
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    yr = parseInt(s.split(' ')[1], 10) - 1989;
    return (yr * 12) + months.indexOf(s.split(' ')[0]);

}

function monthSort(a, b) {
    'use strict';
    return a.begin - b.begin;
}

function rangesToNum(prev, cur, i, array) {
    'use strict';
    return prev + (1 + (parseInt(cur.end, 10) - parseInt(cur.begin, 10))) / 12.0;
}


var fs = require("fs");
var monthRanges, idx, elem0, elem1, finalRange, result, t;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        monthRanges = [];
        finalRange = [];
        line = line.split('; ');
        for (idx = 0; idx < line.length; idx += 1) {
            elem0 = line[idx].split('-')[0];
            elem1 = line[idx].split('-')[1];
            monthRanges.push({begin: monToNum(elem0), end: monToNum(elem1)});
        }
        monthRanges = monthRanges.sort(monthSort);
        finalRange.push(monthRanges[0]);
        for (idx = 1; idx < monthRanges.length; idx += 1) {
            t = finalRange[finalRange.length - 1];
            if (t.end <  monthRanges[idx].begin) {
                finalRange.push(monthRanges[idx]);
            } else if (t.end < monthRanges[idx].end) {
                finalRange[finalRange.length - 1].end = monthRanges[idx].end;
            }
        }
        result = Math.floor(finalRange.reduce(rangesToNum, 0));
        console.log(result);

    }
});
