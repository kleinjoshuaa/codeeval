var i, result, rotated;
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.split(',');
        rotated = line[1];
        i = 0;
        while((line[0] !== rotated) && (i < rotated.length)) {
            rotated = rotated.slice(1,rotated.length)+rotated[0];
            i += 1;
        }
        if (line[0] === rotated) {
            console.log('True');
        } else {
            console.log('False');
        }
    }
});
