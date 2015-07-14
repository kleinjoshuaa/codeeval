var op1, op2;
var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        line = line.split(' ');
        op1 = {
            x: parseInt(line[0], 10),
            y: parseInt(line[1], 10)
        };
        op2 = {
            x: parseInt(line[2], 10),
            y: parseInt(line[3], 10)
        };

        if (op1.x === op2.x && op1.y === op2.y) {
            console.log('here');
        } else if (op2.x === op1.x && op2.y >= op1.y) {
            console.log('N');
        } else if (op2.x === op1.x && op2.y <= op1.y) {
            console.log('S');
        } else if (op2.x >= op1.x && op2.y === op1.y) {
            console.log('E');
        } else if (op2.x <= op1.x && op2.y === op1.y) {
            console.log('W');
        } else if (op2.x >= op1.x && op2.y >= op1.y) {
            console.log('NE');
        } else if (op2.x <= op1.x && op2.y <= op1.y) {
            console.log('SW');
        } else if (op2.x >= op1.x && op2.y <= op1.y) {
            console.log('SE');
        } else if (op2.x <= op1.x && op2.y >= op1.y) {
            console.log('NW');
        }
    }
});
