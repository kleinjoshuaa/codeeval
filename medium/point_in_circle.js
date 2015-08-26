var s, circle;
var dataRegex = /Center: \(([-+]?\d*\.?\d*), ([-+]?\d*\.?\d*)\); Radius: ([-+]?\d*\.?\d*); Point: \(([-+]?\d*\.?\d*), ([-+]?\d*\.?\d*)\)/;

function Circle(point, radius) {
    this.center = [parseFloat(point[0]), parseFloat(point[1])];
    this.radius = parseFloat(radius);

    this.containsPoint = function(point) {
        return (
                    (
                        Math.pow(point[0] - this.center[0],2) + Math.pow(point[1] - this.center[1],2)
                    ) < Math.pow(this.radius, 2)
                );

    }

}


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        s = line.match(dataRegex);
        circle = new Circle([s[1], s[2]], s[3]);
        console.log(circle.containsPoint([s[4],s[5]]) ? 'true' : 'false');
    }
});
