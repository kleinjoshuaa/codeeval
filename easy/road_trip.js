function parseCity(s) {
    s = s.split(',');
    s[1] = parseInt(s[1], 10);
    return s;
}

function parseLine(s) {
    var cityPairs = s.split('; ');
    return cityPairs.map(parseCity);
}

function cityObjSort(a,b) {
    return (a[1] - b[1]);
}

function parseCityObj(o) {
    var s = [], idx, lastNum = 0;
    for (idx = 0; idx < o.length; idx += 1) {
        s.push(o[idx][1] - lastNum);
        lastNum = o[idx][1];
    }
    return s.join(',');

}

var fs  = require("fs");
var cityObj;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        cityObj = parseLine(line).sort(cityObjSort);
        console.log(parseCityObj(cityObj));
    }
});
