var mat;

function numericSort(a,b){return a - b}

function Matrix(s) {
    'use strict';
    this.rawText = s;
    this.rowText = this.rawText.split(' | ');
    this.height = this.rowText.length;
    this.width = this.rowText[0].split(' ').length;

    this.formatAsArray = function () {
        var i, j, row;
        for (i = 0; i < this.rowText.length; i += 1) {
            row = this.rowText[i].split(' ');
            for (j = 0; j < row.length; j += 1) {
                if (typeof this.matrix === 'undefined') {
                    this.matrix = [];
                }
                if (typeof this.matrix[i] === 'undefined') {
                    this.matrix[i] = [];
                }
                    this.matrix[i][j] = parseInt(row[j], 10);
                }
            }
                return this.matrix;
        }


    this.formatAsArray();

    this.getCol = function (n) {
        var idx = 0,
            col = [];
        while (idx < this.height) {
            col.push(this.matrix[idx][n]);
            idx += 1;
        }
        return col;
    };

    this.getMaxFromRows = function () {
        var i, j, result, col;
        result = [];
        i = 0;
        while (i < this.width) {
            col = this.getCol(i);
            result[i] = col.sort(numericSort)[col.length-1];
            i += 1;
        }
        return result;
    };
}


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        mat = new Matrix(line);
        console.log(mat.getMaxFromRows().join(' '));
    }
});
