function decToRoman(d) {
    var rn = '', idx, numeral, nums = [['M', 1000],
                ['CM', 900],
                ['D', 500],
                ['CD', 400],
                ['C', 100],
                ['XC', 90],
                ['L', 50],
                ['XL', 40],
                ['X', 10],
                ['IX', 9],
                ['V', 5],
                ['IV', 4],
                ['I', 1]];

    for (idx = 0; idx < nums.length; idx += 1) {
        numeral = nums[idx];
        while (d - numeral[1] >= 0) {
            rn += numeral[0];
            d -= numeral[1];
        }
    }
    return rn;
}


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(decToRoman(line));
    }
});
