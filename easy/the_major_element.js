var fs = require("fs");
var threshold, counts, idx, num;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    var threshold, counts, idx, num, majorElem;
    if (line !== "") {
        counts = {};
        majorElem = 'None';
        line = line.split(',');
        threshold = (line.length) / 2;
        for (idx = 0; idx < line.length; idx += 1) {
            num = line[idx];
            counts[num] = (typeof counts[num] !== 'undefined' ? counts[num] + 1 : 1);
        }
        for (num in counts) {
            if (counts.hasOwnProperty(num) && counts[num] > threshold) {
                majorElem = num;
            }
        }
        console.log(majorElem);
    }
});
