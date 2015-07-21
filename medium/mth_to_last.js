var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    var m;
    if (line !== "") {
        line = line.split(' ');
        m = parseInt(line.slice(-1), 10);
        line.pop();
        if (m <= line.length) {
            console.log(line[line.length - m]);
        }
    }
});
