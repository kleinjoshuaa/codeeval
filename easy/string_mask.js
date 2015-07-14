var mask, idx, result, fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        line = line.split(' ');
        mask = line[1];
        result = '';
        for (idx = 0; idx < mask.length; idx += 1) {
            if (mask[idx] === '1') {
                result += (line[0][idx]).toUpperCase();
            } else {
                result += (line[0][idx]);
            }
        }
        console.log(result);
    }
});
