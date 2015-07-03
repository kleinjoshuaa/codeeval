var sum = 0;
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        sum += parseInt(line,10);
    }
});
console.log(sum);
