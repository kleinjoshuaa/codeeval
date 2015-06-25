//Sample code to read in test cases:
var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        //do something here
        console.log(line.split('').reduce(function(previousValue, currentValue) {
            return parseInt(previousValue,10) + parseInt(currentValue,10);
        }));
    }
});
