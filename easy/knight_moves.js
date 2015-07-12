letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function initBoard() {
    'use strict';
    var board = [], idx, idx1, letter;
    for (idx = 0; idx < 8; idx += 1) {
        letter = letters[idx];
        for (idx1 = 1; idx1 < 9; idx1 += 1) {
            board.push(letter + idx1);
        }
    }

    return board;
}

var fs  = require("fs"), board = initBoard(), moveTypes;
moveTypes = [[2, -1], [2, 1], [1, -2], [1, 2], [-2, -1], [-2, 1], [-1, -2], [-1, 2]];
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    var moves = [], move, idx, movedLoc;
    if (line !== "") {
        line = line.split('');
        line[1] = parseInt(line[1], 10);
        for (idx = 0; idx < moveTypes.length; idx += 1) {
            move = moveTypes[idx];
            movedLoc = [letters.indexOf(line[0]) + move[0], move[1] + line[1]];
            movedLoc[0] = letters[movedLoc[0]];
            if (board.indexOf(movedLoc.join('')) !== -1) {
                moves.push(movedLoc.join(''));
            }
        }
        console.log(moves.sort().join(' '));
    }
});
