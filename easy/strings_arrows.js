var fs  = require("fs");
var numArrows, idx;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        numArrows = 0;
        for (idx = 0; idx < line.length; idx += 1) {
            if (line.slice(idx, idx + 5) === '>>-->' || line.slice(idx, idx + 5) === '<--<<') {
                numArrows += 1;
            }
        }
        console.log(numArrows);
    }
});
