//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    var num, p1,p2;
    if (line !== "") {
        //do something here
        num = line.split(',')[0];
        p1 = parseInt(line.split(',')[1])-1;
        p2 = parseInt(line.split(',')[2])-1;
        num = parseInt(num).toString(2).split('').reverse();
        console.log( num[p1] === num[p2] ? 'true' : 'false');
    }
});
