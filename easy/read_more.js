var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    var space;
    if (line !== "") {
        if (line.length <= 55) {
            console.log(line);
        } else if (line.slice(0,40).match(' ')) {
            space = line.slice(0,40).lastIndexOf(' ');
            console.log(line.slice(0,space)+"... <Read More>");
        } else {
            console.log(line.slice(0,40)+"... <Read More>");
        }
    }
});
