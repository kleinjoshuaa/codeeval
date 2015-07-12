
var fs  = require("fs");
var result, idx;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        line = line.split('');
        result = line[0];
        for (idx = 0; idx < line.length; idx += 1) {
        //do something here
            if (result[result.length - 1] !== line[idx]) {
                result += ( line[idx]);
            }
        }
        console.log(result);
    }
});
