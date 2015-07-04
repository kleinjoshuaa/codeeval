var fs = require("fs");
var nums,
    strings,
    idx,
    answer_line;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        nums = [];
        strings = [];
        answer_line = '';
        line = line.split(',');
        for (idx = 0; idx < line.length; idx += 1) {
            if (isNaN(parseInt(line[idx], 10))) {
                strings.push(line[idx]);
            } else {
                nums.push(line[idx]);
            }
        }
        if (typeof strings[0] !== 'undefined') {
            answer_line += strings.join(',');
        }
        if (typeof strings[0] !== 'undefined' && typeof nums[0] !== 'undefined') {
            answer_line += '|';
        }
        if (typeof nums[0] !== 'undefined') {
            answer_line += nums.join(',');
        }
        console.log(answer_line);
    }
});
