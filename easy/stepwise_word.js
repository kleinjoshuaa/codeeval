function stepWisePrint(w) {
    'use strict';
    var numStars, result, idx, idx1;
    w = w.split('');
    result = '';
    for (idx = 0; idx < w.length; idx += 1) {
        idx1 = 0;
        while (idx1 < idx) {
            result += '*';
            idx1 += 1;
        }
        result += w[idx];
        if (idx < (w.length - 1)) {
            result += ' ';
        }
    }
    return result;
}



var idx, maxLenIdx, fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        line = line.split(' ');
        maxLenIdx = 0;
        for (idx = 0; idx < line.length; idx += 1) {
            if (line[idx].length > line[maxLenIdx]) {
                maxLenIdx = idx;
            }
        }
        console.log(stepWisePrint(line[maxLenIdx]));
    }
});
