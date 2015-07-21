function doRemove(elem, removeArray) {
    'use strict';
    if (removeArray.indexOf(elem) !== -1) {
        return false;
    } else {
        return true;
    }
}


var fs  = require("fs");
var newLine, charsToRemove;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        line = line.split(', ');
        newLine = line[0].split('');
        charsToRemove = line[1].split('');
        newLine = newLine.filter(function (a) {return doRemove(a, charsToRemove); });
        console.log(newLine.join(''));
    }
});
