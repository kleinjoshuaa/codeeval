var fs = require("fs");
var items, sum, item, idx;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    sum = 0;
    if (line !== "") {
        line = JSON.parse(line);
        if (typeof line.menu.items !== 'undefined') {
            items = line.menu.items;
            for (idx = 0; idx < items.length; idx += 1) {
                if (items[idx] !== null && typeof items[idx].label !== 'undefined') {
                    sum += items[idx].id;
                }
            }

        }
        console.log(sum);
    }
});
