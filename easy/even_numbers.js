var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(parseInt(line, 10) % 2 === 0 ? 1 : 0);
    }
});
