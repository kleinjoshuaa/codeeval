function Matrix(matrix) {
    'use strict';
    if(typeof matrix === 'undefined') {
        matrix = [];
    }
    this.matrix = matrix;
    this.height = this.matrix.length;
    this.width = typeof this.matrix[0] === 'undefined' ? 0 : this.matrix[0].length;


    this.getRow = function (n) {
        return this.matrix[n];
    };

    this.getCol = function (n) {
        var idx = 0,
            col = [];
        while (idx < this.height) {
            col.push(this.matrix[idx][n]);
            idx += 1;
        }
        return col;
    };

    this.setRow = function (n, a) {
        this.matrix[n] = a;
    };

    this.transpose = function () {
        // get columns and set as rows
        var idx = 0,
            newMatrix = new Matrix();
        while (idx < this.width) {
            newMatrix.setRow(idx, this.getCol(idx));
            idx += 1;
        }

        this.matrix = newMatrix.matrix;
        this.height = this.matrix.length;
        this.width = this.matrix[0].length;
    };

    this.rotate90 = function () {
        var idx;
        this.transpose();
        for (idx = 0; idx < this.matrix.length; idx += 1) {
            this.matrix[idx] = this.matrix[idx].reverse();
        }
    };


    this.toLine = function (spacer) {
        var line = '',
            idx = 0;
        while (idx < this.matrix.length) {
            line += this.matrix[idx].join(spacer);
            idx += 1;
            if (idx < this.matrix.length) {
                line += spacer;
            }
        }
        return line;
    };
}

function toArray(s) {
    'use strict';
    var lineAsArr = [], individualLine, idx, idx1, length;
    s = s.split(' ');
    length = Math.sqrt(s.length);
    for (idx = 0; idx < length; idx += 1) {
        individualLine = [];
        for (idx1 = 0; idx1 < length; idx1 += 1) {
            individualLine.push(s[(idx * length) + idx1]);
        }
        lineAsArr.push(individualLine);
    }

    return lineAsArr;
}


var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    var mat;
    if (line !== "") {
        line = toArray(line);
        mat = new Matrix(line);
        mat.rotate90();
        console.log(mat.toLine(' '));
    }
});
