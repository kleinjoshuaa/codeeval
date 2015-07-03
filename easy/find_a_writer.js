var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    var textData, poses, answer;
    if (line !== "") {
        line = line.split("| ");
        textData = line[0];
        poses = line[1].split(' ');
        answer = poses.reduce(function (prev, current, idx, ary) {
            return prev += textData[current-1];
        },'');
        console.log(answer);
    }
});
