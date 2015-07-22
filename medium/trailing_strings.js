var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        line = line.split(',');
        if (line[0].match(line[1]) && line[0].lastIndexOf(line[1]) + line[1].length === line[0].length) {
            console.log('1');
        } else {
            console.log('0');
        }
    }
});
