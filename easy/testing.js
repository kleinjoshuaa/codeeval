var fs  = require("fs");
var bugs, i, result;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        line = line.split(' | ');
        bugs = 0;
        for (i = 0; i < line[0].length; i += 1) {
            if (line[0][i] !== line[1][i]) {
                bugs += 1;
            }
        }
        if (bugs > 6) {
            result = 'Critical';
        } else if (bugs > 4) {
            result = 'High';
        } else if (bugs  > 2) {
            result = 'Medium';
        } else if (bugs > 0) {
            result = 'Low';
        } else {
            result = 'Done';
        }
        console.log(result);
    }
});
