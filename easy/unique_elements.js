var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    var lineArr;
    if (line !== "") {
        lineArr = line.split(',');
        console.log(lineArr.filter(uniqueFilter).join(','));
    }
});

function uniqueFilter(v, i, s) {
    return s.indexOf(v) === i;
}
