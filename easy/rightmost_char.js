var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        str = line.split(',')[0];
        char = line.split(',')[1];
        console.log(str.lastIndexOf(char));
    }
});
