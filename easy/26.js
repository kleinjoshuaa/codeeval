var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(line.split(' ')
                    .map(function(a) {
                            var l = a.split('');
                            l[0] = l[0].toUpperCase();
                            return l.join('')})
                    .join(' '));
    }
});

