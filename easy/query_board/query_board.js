function initBoard() {
    'use strict';
    var a, i, j;
    a = [];
    for (i = 0; i < 256; i += 1) {
        for (j = 0; j < 256; j += 1) {
            if (typeof a[i] === 'undefined') {
                a[i] = new Array(256);
            }
            a[i][j] = 0;
        }
    }
    return a;
}

function query(queryControl) {
    'use strict';
    var result, i;
    result = 0;
    if (queryControl.op === 'QueryCol') {
        for (i = 0; i < 256; i += 1) {
            result += queryControl.board[queryControl.rowOrCol][i];
        }
    } else if (queryControl.op === 'QueryRow') {
        for (i = 0; i < 256; i += 1) {
            result += queryControl.board[i][queryControl.rowOrCol];
        }
    }

    return result;
}

function set(setControl) {
    'use strict';
    var i;
    if (setControl.op === 'SetCol') {
        for (i = 0; i < 256; i += 1) {
            setControl.board[setControl.rowOrCol][i] = setControl.destVal;
        }
    } else if (setControl.op === 'SetRow') {
        for (i = 0; i < 256; i += 1) {
            setControl.board[i][setControl.rowOrCol] = setControl.destVal;
        }
    }
    return setControl.board;
}


var fs  = require("fs");
var board = initBoard();

function processLine(line) {
    'use strict';
    var args,  queryControl, setControl;
    if (line !== "") {
        args = line.split(' ');
        if (line.match(/Query.*/) !== null) {
            queryControl = { board: board,
                            op: args[0],
                            rowOrCol: parseInt(args[1], 10)};
           // console.log(JSON.stringify(queryControl));
            console.log(query(queryControl));
        } else if (line.match(/Set.*/) !== null) {
            setControl = {  board: board,
                            op: args[0],
                            rowOrCol: parseInt(args[1], 10),
                            destVal: parseInt(args[2], 10)};
            //console.log(JSON.stringify(setControl));
            board = set(setControl);
        }
    }
}



fs.readFileSync(process.argv[2]).toString().split('\n').forEach(processLine);


