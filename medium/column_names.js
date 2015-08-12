var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        line = parseInt(line, 10);
        line = line.toString(26);
        console.log(line);
    }
});
