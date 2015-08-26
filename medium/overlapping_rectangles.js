var rect1, rect2;
function Rectangle(pointArray) {
    this.ULx = parseFloat(pointArray[0]);
    this.ULy = parseFloat(pointArray[1]);
    this.LRx = parseFloat(pointArray[2]);
    this.LRy = parseFloat(pointArray[3]);

    this.overlapsWith = function(otherRectangle) {
        // If one rectangle is on left side of other
        if (this.ULx > otherRectangle.LRx || otherRectangle.ULx > this.LRx) {
            return 'False';
        };
        // If one rectangle is above other
        if (this.ULy < otherRectangle.LRy || otherRectangle.ULy < this.LRy) {
            return 'False';
        };
        return 'True';
    }

}


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.split(',');
        rect1 = new Rectangle([line[0], line[1], line[2], line[3]]);
        rect2 = new Rectangle([line[4], line[5], line[6], line[7]]);
        console.log(rect1.overlapsWith(rect2));
    }
});
