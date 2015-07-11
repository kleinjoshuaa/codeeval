var fs  = require("fs");
var lowerCase, upperCase, idx;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    lowerCase = 0;
    upperCase = 0;
    if (line !== "") {
        for (idx = 0; idx < line.length; idx += 1) {
            if (line[idx].toUpperCase() === line[idx]) {
                upperCase += 1;
            }
            if (line[idx].toLowerCase() === line[idx]) {
                lowerCase += 1;
            }
        }
        lowerCase *= (100 / line.length);
        upperCase *= (100 / line.length);

        console.log('lowercase: ' + lowerCase.toFixed(2) + ' uppercase: ' + upperCase.toFixed(2));
    }
});
