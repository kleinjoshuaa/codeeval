function Cycle(array) {
    'use strict';
    this.array = array;
    this.index = 0;
    this.length = this.array.length;
    this.next = function () {
        this.index += 1;
        if (this.index === this.array.length) {
            this.index = 0;
        }

        return this.array[this.index];
    };

    this.remove = function () {
        this.array.splice(this.index, 1);
        this.length = this.array.length;
        this.index = 0;
        return this.array;
    };

    this.move = function (spots) {
        var i = 1;
        while (i < spots) {
            this.next();
            i += 1;
        }
        return this.array[this.index];
    };
}


var fs = require("fs");
var names, spot, i;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        i = 1;
        names = new Cycle(line.split(' | ')[0].split(' '));
        spot = parseInt(line.split(' | ')[1], 10);
        while (names.length > 1) {
            names.move(spot);
            names.remove();
        }
    }
    console.log(names.array.join(''));
});
