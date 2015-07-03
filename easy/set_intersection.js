//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    var list1,list2,intersection;
    intersection = [];
    if (line !== "") {
        list1 = line.split(';')[0].split(',');
        list2 = line.split(';')[1].split(',');
        list1.forEach(function(item) {
            if(list2.indexOf(item) > -1) {
                intersection.push(item);
            }
        });
        console.log(intersection.join(','));
    }
});
