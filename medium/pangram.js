function findMissingLetters(string) {
    'use strict';
    var i, LETTERS, missingLets = '';
    LETTERS = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    string = string.toLowerCase();
    for (i = 0; i < LETTERS.length; i += 1) {
        if(string.indexOf(LETTERS[i]) === -1) {
            missingLets += LETTERS[i];
        }
    }
    return missingLets;

}


var missingLetters;
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line != "") {
        missingLetters = findMissingLetters(line);
        if(missingLetters) {
            console.log(missingLetters);
        } else {
            console.log('NULL');
        }
    }
});
