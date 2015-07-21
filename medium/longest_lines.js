var idx = 0, idx0, numLines, lines = [], fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        if (idx === 0) {
            numLines = parseInt(line, 10);
            idx += 1;
        } else {
            lines.push(line);
        }
        //console.log(answer_line);
    }
});

lines = lines.sort(function (a, b) {'use strict'; return b.length - a.length; });

for (idx0 = 0; idx0 < numLines; idx0 += 1) {
    console.log(lines[idx0]);
}
