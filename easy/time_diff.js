function Time(t) {
    'use strict';
    this.hours = parseInt(t[0], 10);
    this.minutes = parseInt(t[1], 10);
    this.seconds = parseInt(t[2], 10);

    this.toSeconds = function () {
        return this.hours * 3600 + this.minutes * 60 + this.seconds;
    };

    this.dif = function (otherTime) {
        return Math.abs(this.toSeconds() - otherTime.toSeconds());
    };

    this.rebalance  = function () {
        while (this.seconds >= 60) {
            this.minutes += 1;
            this.seconds -= 60;
        }
        while (this.minutes >= 60) {
            this.hours += 1;
            this.minutes -= 60;
        }

    };

    this.prettyFormat = function () {
        this.rebalance();
        return ("00" + this.hours).slice(-2) + ':' + ("00" + this.minutes).slice(-2) + ':' + ("00" + this.seconds).slice(-2);
    };
}


function diffHMS(s) {
    'use strict';
    var t1, t2, sec;
    s = s.split(' ');
    t1 = new Time(s[0].split(':'));
    t2 = new Time(s[1].split(':'));

    sec = new Time([0, 0, t2.dif(t1)]);

    return sec.prettyFormat();

}


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    if (line !== "") {
        console.log(diffHMS(line));
    }
});

function test(func, testVal, output) {
    'use strict';
    if (func(testVal) === output) {
        console.log('PASSED: test case: ' + testVal);
    } else {
        console.log('FAILED: test case: ' + testVal + ' -> ' + func(testVal) + ' !== ' + output);
    }
}

function runTests(f) {
    'use strict';
    test(f, '14:01:57 12:47:11', "01:14:46");
    test(f, '13:09:42 22:16:15', "09:06:33");
    test(f, '08:08:06 08:38:28', "00:30:22");
    test(f, '23:35:07 02:49:59', "20:45:08");
    test(f, '14:31:45 14:46:56', "00:15:11");
}



//runTests(diffHMS);

