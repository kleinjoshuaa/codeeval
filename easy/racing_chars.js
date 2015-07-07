var lastTurn = '';
var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var pos = (line.match('C') ? line.indexOf('C') : 0) || line.indexOf('_');
        if (lastTurn !== '' && pos > lastTurn) {
            console.log(line.replace(line[pos], '\\'));
        } else if (lastTurn !== '' && pos < lastTurn) {
            console.log(line.replace(line[pos], '/'));
        } else {
            console.log(line.replace(line[pos], '|'));
        }
        lastTurn = pos;
    }
});
