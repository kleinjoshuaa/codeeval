var fs  = require("fs");
var maxLength, idx;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        maxLength = 0;
        line = line.split(' ');
        for (idx = 0; idx < line.length; idx += 1) {
            if (line[idx].length > line[maxLength].length) {
                maxLength = idx;
            }
        }
        console.log(line[maxLength]);
    }
});
