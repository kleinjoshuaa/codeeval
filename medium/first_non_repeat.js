var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    var uniqChars, idx;
    if (line !== "") {
        line = line.split('');
        uniqChars = line.filter(function (a, i, arr) {return arr.indexOf(a) === arr.lastIndexOf(a); });
        for (idx = 0; idx < line.length; idx += 1) {
            if (uniqChars.indexOf(line[idx]) !== -1) {
                console.log(line[idx]);
                break;
            }
        }
    }
});
