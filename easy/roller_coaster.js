var fs  = require("fs");
var idx, charCt, answer_line;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        charCt = 0;
        answer_line = '';
        for (idx = 0; idx < line.length; idx += 1) {
            if (charCt % 2 === 0 && line[idx].match(/[A-Za-z]/)) {
                answer_line += line[idx].toUpperCase();
                charCt += 1;
            } else if (line[idx].match(/[A-Za-z]/)) {
                answer_line += line[idx].toLowerCase();
                charCt += 1;
            } else {
                answer_line += line[idx];
            }
        }
        console.log(line);
    }
});
