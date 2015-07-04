function filterLine(char) {
    return char.match(/[a-j0-9]/);
}

function revealNums(char) {
    var revealMap = {a: 0,
                     b: 1,
                     c: 2,
                     d: 3,
                     e: 4,
                     f: 5,
                     g: 6,
                     h: 7,
                     i: 8,
                     j: 9};
    if (char.match(/[a-j]/)) {
        return revealMap[char];
    } else {
        return char;
    }
}

function processLine(line) {
    var result;
    result = line.split('').filter(filterLine).map(revealNums).join('');
    return result === '' ? 'NONE' : result;

}


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(processLine(line));
    }
});

