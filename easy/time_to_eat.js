var fs  = require("fs");
var times, hh, mm, ss;


function stringToDate(self) {
    var d = new Date(1900, 01, 01, self.slice(0,2), self.slice(3,5),self.slice(6,8));
    return d;
}

function dateToString(date) {
    return pad(date.getHours,2)+':'+pad(date.getMinutes,2)+':'+pad(date.getSeconds,2);
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) {s = "0" + s}
    return s;
}


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        times = line.split(' ');
        times.map(stringToDate);
        times.sort().reverse();
        times.map(dateToString);
        console.log(times.join(' '));
    }
});
