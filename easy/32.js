var fs = require("fs");
var winPos, newLine, counts, idx, num, winVal;
fs.readFileSync(process.argv[2]).toString().split('\r\n').forEach(function (line) {
    winPos = 0;
    if (line !== "") {
        line = line.split(' ');
        counts = {};
        newLine = [];
        console.log('Array: ' + line);
        for (idx = 0; idx < line.length; idx += 1) {
            num = line[idx];
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        for (idx in counts) {
            if (counts.hasOwnProperty(idx) && counts[idx] === 1) {
                newLine.push(idx);
            }
        }
        console.log(newLine);
        if (newLine.length >= 1) {
            winPos = line.indexOf(newLine.sort()[0]) + 1;
        }
        console.log(winPos);
    }
});
