var pointRegex = /\((\d+),(\d+)\), \((\d+),(\d+)\), \((\d+),(\d+)\), \((\d+),(\d+)\)/;
var s, q;




function Quadralateral(pointArray) {
    this.A = [parseInt(pointArray[0][0], 10), parseInt(pointArray[0][1], 10)];
    this.B = [parseInt(pointArray[1][0], 10), parseInt(pointArray[1][1], 10)];
    this.C = [parseInt(pointArray[2][0], 10), parseInt(pointArray[2][1], 10)];
    this.D = [parseInt(pointArray[3][0], 10), parseInt(pointArray[3][1], 10)];

    this.points = [this.A, this.B, this.C, this.D];

    this.center =  ([(this.A[0]+this.B[0]+this.C[0]+this.D[0])/4, (this.A[1]+this.B[1]+this.C[1]+this.D[1])/4]);

    function calculateVector(v1, v2, op) {
        var result;
        if (op === '-') {
            result  =  [v1[0] - v2[0], v1[1] - v2[1]];
        } else if (op === '+') {
            result = [v1[0] - v2[0], v1[1] - v2[1]];
        }
        return result;
    }

    this.containsPoint = function (point) {
        var i;
        for (i = 0; i < this.points.length; i+= 1) {
            if(this.points[i][0] === point[0] && this.points[i][1] === point[1] ) {
                return true;
            }
        }
        return false;
    }

    this.uniquePoints = function() {
               return ((this.A[0] !== this.B[0]) || (this.A[1] !== this.B[1]));

    }

    this.isSquare = function() {
        var v1 = calculateVector(this.A, this.center, '-');
        var v2 = [-1 * v1[1], v1[0]];
        if(this.containsPoint(calculateVector(this.center, v1, '-')) &&
           this.containsPoint(calculateVector(this.center, v2, '+')) &&
           this.containsPoint(calculateVector(this.center, v2, '-')) &&
           this.uniquePoints()) {
           return 'true';
           }
           return 'false';
    }

}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        s = line.match(pointRegex);
        q = new Quadralateral([[s[1], s[2]],[s[3], s[4]],[s[5], s[6]],[s[7], s[8]]]);
        console.log(q.isSquare());
    }
});
