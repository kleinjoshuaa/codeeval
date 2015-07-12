function createBigDigits(d) {
    'use strict';
    var num = [], result = '', idx, idx1, curLine, curNum;
    d = d.replace(/[^\d]/g, '');
    num[0] = ['-**--', '--*--', '***--', '***--', '-*---', '****-', '-**--', '****-', '-**--', '-**--'];
    num[1] = ['*--*-', '-**--', '---*-', '---*-', '*--*-', '*----', '*----', '---*-', '*--*-', '*--*-'];
    num[2] = ['*--*-', '--*--', '-**--', '-**--', '****-', '***--', '***--', '--*--', '-**--', '-***-'];
    num[3] = ['*--*-', '--*--', '*----', '---*-', '---*-', '---*-', '*--*-', '-*---', '*--*-', '---*-'];
    num[4] = ['-**--', '-***-', '****-', '***--', '---*-', '***--', '-**--', '-*---', '-**--', '-**--'];
    num[5] = ['-----', '-----', '-----', '-----', '-----', '-----', '-----', '-----', '-----', '-----'];

    for (idx = 0; idx < 6; idx += 1) {
        curLine = num[idx];
        if (idx > 0) {
            result = '';
        }
        for (idx1 = 0; idx1 < d.length; idx1 += 1) {
            curNum = parseInt(d[idx1], 10);
            result += curLine[curNum];
        }
        console.log(result);
    }

}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        createBigDigits(line);
    }
});
