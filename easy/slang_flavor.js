function insert(s, idx, val) {
    'use strict';
    return s.slice(0, idx) + val + s.slice(idx + 1);
}
var numPunct = 0;
var replaceCount = 0;
var replacements = [', yeah!', ', this is crazy, I tell ya.', ', can U believe this?', ', eh?', ', aw yea.', ', yo.', '? No way!', '. Awesome!'];
var lineCursor;
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        lineCursor = line.search(/[\.!?]/g);
        while (true) {
            if (numPunct % 2 === 1) {
                line = insert(line, lineCursor, replacements[replaceCount % 8]);
                lineCursor += replacements[replaceCount % 8].length + 1;
                replaceCount += 1;
            }
            lineCursor += 1;
            numPunct += 1;
            if (line.slice(lineCursor).search(/[\.!?]/g) === -1) {break; }
            lineCursor += line.slice(lineCursor).search(/[\.!?]/g);
        }
        console.log(line);
    }
});
