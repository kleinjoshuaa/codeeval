var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        line = line.replace(/[^A-Za-z\ ]+/g, ' ')
                   .replace(/[\ ]+/g, ' ')
                   .replace(/^[\ ]/, '')
                   .replace(/[\ ]$/, '')
                   .split('')
                   .map(function(a) {return a.toLowerCase(); })
                   .join('');
        console.log(line);
    }
});
