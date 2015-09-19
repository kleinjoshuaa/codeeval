function isPalendrome(s) {
    'use strict';
    var i, l = Math.floor(s.length/2);
    for (i = 0; i < l; i += 1) {
        if(s[i] !== s[s.length - (1+i)]) {
            return false;
        }
    }
    return true;

}

var fs  = require("fs");
var itr;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        'use strict';
        itr = 0;
        while(!isPalendrome(line)) {
            line = ''+(parseInt(line, 10) + parseInt(line.split('').reverse().join(''), 10));
            itr += 1;
        }
        console.log(itr+' '+line);
    }
});
