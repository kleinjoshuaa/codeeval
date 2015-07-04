var fs  = require("fs");
var list, answer, idx, multipliers;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        list = line.split(' | ');
        answer = list[0].split(' ');
        multipliers = list[1].split(' ');
        for (idx = 0; idx < answer.length; idx += 1) {
            answer[idx] *= multipliers[idx];
        }
        console.log(answer.join(' '));
    }
});
