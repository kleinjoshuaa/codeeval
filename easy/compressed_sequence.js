var fs = require("fs");
var result, idx, counter;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.split(' ');
        result = [];
        counter = 1;
        for (idx = 0; idx < line.length; idx += 1) {
            if (line[idx] === line[idx + 1]) {
                counter += 1;
            } else {
                result.push(counter + ' ' + line[idx]);
                counter = 1;

            }
        }

        console.log(result.join(' '));
    }
});
