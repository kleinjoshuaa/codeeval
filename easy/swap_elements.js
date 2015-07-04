var fs  = require("fs");
var list, swapList, idx, swapFrom, swapTo, swapVar;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        //do something here
        list = line.split(' : ')[0].split(' ');
        swapList = line.split(' : ')[1].split(', ');
        for (idx = 0; idx < swapList.length; idx += 1) {
            swapFrom = swapList[idx].split('-')[0];
            swapTo   = swapList[idx].split('-')[1];
            swapVar = list[swapFrom];

            list[swapFrom] = list[swapTo];
            list[swapTo] = swapVar;
        }
        console.log(list.join(' '));
    }
});
