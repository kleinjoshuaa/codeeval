function brent(array) {
    // JS implementation of brent's cycle detection algorithm
    'use strict';
    var power = 1,
        lam = 1,
        idx = 0,
        mu, idx0, idx1, hare, tortoise;
    tortoise = array[idx];
    idx += 1;
    hare = array[idx];
    while (tortoise !== hare) {
        if (power === lam) { // time to start a new power of two?
            tortoise = hare;
            power *= 2;
            lam = 0;
        }
        idx += 1;
        hare = array[idx];
        lam += 1;
    }
    // Find the position of the first repetition of length ?
    mu = 0;
    idx0 = 0;
    tortoise = array[idx0];

    idx0 = (lam);

    idx1 = 0;
    hare = array[idx0];
    while (tortoise !== hare) {
        mu += 1;
        idx1 += 1;
        idx0 += 1;
        hare = array[idx0];
        tortoise = array[idx1];
    }

    return {
        loopLength: lam,
        initLoopElem: mu
    };
}

var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    'use strict';
    var result, idx, initElem, answerLine = [];
    if (line !== "") {
        line = line.split(' ');
        result = brent(line);
        initElem = result.initLoopElem;
        for (idx = 0; idx < result.loopLength; idx += 1) {
            answerLine.push(line[initElem + idx]);
        }
        console.log(answerLine.join(' '));
    }
});
