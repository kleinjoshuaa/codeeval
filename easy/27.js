var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(line.split('').map(processChar).join(''));
    }
});


function processChar(a) {
    if(a.toUpperCase() === a) {
        return a.toLowerCase();
    } else {
        return a.toUpperCase();
    }
}
