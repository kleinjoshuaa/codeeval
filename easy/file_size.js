var fs  = require("fs");
//fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
//    if (line !== "") {
//        //do something here
//        //console.log(answer_line);
//    }
//});

console.log(fs.statSync(process.argv[2]).size);
