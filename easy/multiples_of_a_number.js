//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    var x,n,z;
    if (line !== "") {
        //do something here
        x = line.split(',')[0];
        n = line.split(',')[1];
        z = 0;
        do {z+=1} while (z*n < x);
        console.log(z*n);
    }
});
