var fs  = require("fs");
var wines, letters, result, i, j, containsAll, reg;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        'use strict';
        result = [];
        letters = line.split(' | ')[1];
        wines = line.split(' | ')[0].split(' ');
        for(i = 0; i < wines.length; i += 1) {
            containsAll = true;
            for (j = 0; j < letters.length; j += 1) {
                reg = new RegExp("[^"+letters[j]+"]", "gi");
                if(wines[i].replace(reg, "").length < letters.replace(reg, "").length) {
                    containsAll = false;
                }
            }
                if (containsAll === true) {
                    result.push(wines[i]);
                }
            }
        if (result.length === 0 || letters.length === 0) {
            console.log('False');
        } else {
            console.log(result.join(' '));
        }
    }
});
