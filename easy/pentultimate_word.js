var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    var lineLength;
    if (line !== "") {
        lineLength = line.split(' ').length;
        console.log(line.split(' ')[lineLength-2]);
    }
});
