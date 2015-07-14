var result, idx, word, fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        result = '';
        line = line.split(' ');
        idx = 0;
        while (idx < line.length) {
            word = line[idx];
            result += word.charAt(word.length - 1);
            result += word.slice(1, -1);
            result += word.charAt(0);
            if (idx < line.length - 1) {
                result += ' ';
            }
            idx += 1;
        }
        console.log(result);
    }
});
