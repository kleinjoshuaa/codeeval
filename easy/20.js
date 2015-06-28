var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(hex2dec(line));
    }
});


function hex2dec(hex) {
    return parseInt(hex,16).toString(10);
}
