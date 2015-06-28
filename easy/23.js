var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    var args,board;
    board = initBoard();
    if (line !== "") {
        args = line.split(' ');
        if (line.match(/Query.*/)!== null) {
            console.log(query(args,board));
        } else if (line.match(/Set.*/)!== null) {
            board = set(args,board);
        }
    }
});


function query(args,board) {
    var result,rowOrCol;
    result = 0;
    rowOrCol = parseInt(args[1],10);
    if(args[0] === 'QueryCol') {
        for (i =0; i <256; i+=1) {
            result += board[rowOrCol][i];
        }
    } else if (args[0] === 'QueryRow') {
        for (i =0; i <256; i+=1) {
            result += board[i][rowOrCol];
        }
    }

    return result;
}


function set(args,board) {
    var i,rowOrCol;
    rowOrCol = args[1];
    if(args[0] === 'SetCol') {
        for (i =0; i <256; i+=1) {
            board[rowOrCol][i] = parseInt(args[2],10);
        }
    } else if (args[0] === 'SetRow') {
        for (i =0; i <256; i+=1) {
            board[i][rowOrCol] = parseInt(args[2],10);
        }
    }
    return board;
}



function initBoard() {
    var a,i,j;
    a = [];
    for(i =0; i < 256;i+=1) {
        for(j=0;j< 256;j+=1) {
            if (typeof a[i] === 'undefined') {
                a[i] = new Array(256);
            }
            a[i][j] = 0;
        }
    }
    return a;
}
