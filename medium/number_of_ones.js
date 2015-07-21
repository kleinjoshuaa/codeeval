var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    var numOnes;
    if (line !== "") {
        line = parseInt(line, 10).toString(2);
        numOnes = line.split('').filter(function (a) {return a === '1'; }).length;
        console.log(numOnes);
    }
});
