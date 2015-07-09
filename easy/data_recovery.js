function findMissingNo(a) {
    'use strict';
    var idx, b;
    b = [];
    for (idx = 0; idx < a.length + 1; idx += 1) {
        b.push(a[idx]);
    }
    b = b.sort();

    for (idx = 0; idx < b.length + 1; idx += 1) {
        if (b.indexOf(idx) === -1) {
            return idx;
        }
    }
    throw 'Must be missing 1 number!';
}


var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    var elems, order, result, idx, orderNum, missingNo, order2;
    if (line !== "") {
        result = [];
        line = line.split(';');
        elems = line[0].split(' ');
        order = line[1].split(' ');
        for (idx = 0; idx < order.length; idx += 1) {
            order[idx] = parseInt(order[idx] - 1, 10);
        }
        missingNo = findMissingNo(order);

        order.push(missingNo);
        for (idx = 0; idx < order.length; idx += 1) {
            orderNum = parseInt(order[idx], 10);
            result[orderNum] = elems[idx];
        }
        console.log(result.join(' '));
    }
});
