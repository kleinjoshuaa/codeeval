var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        line = line.split(';')[1].split(',');
        //console.log(answer_line);
    }
});
