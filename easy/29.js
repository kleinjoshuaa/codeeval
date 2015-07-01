var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    var x1, x2, y1, y2, answer;
    if (line !== "") {
        x1 = parseInt(line.split(') (')[0].split(', ')[0].substr(1), 10);
        y1 = parseInt(line.split(') (')[0].split(', ')[1], 10);
        x2 = parseInt(line.split(') (')[1].split(', ')[0], 10);
        y2 = parseInt(line.split(') (')[1].split(', ')[1].slice(0, -1), 10);
        console.log(calcDistance(x1,y1,x2,y2));
    }
});

function calcDistance(x1,y1,x2,y2) {
    return   Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
}
