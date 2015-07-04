var fs  = require("fs");
var threshold, counts, idx, num;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(',');
        threshold = (line.length)/2;
        for(idx = 0; idx < line.length; idx += 1) {
            num = line[idx];
            counts[num] = (typeof counts[num] !== 'undefined' ? counts[num] + 1 : 1);
        }

        //console.log(answer_line);
    }
});
