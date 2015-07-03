var nums;

function textToDigit(t) {
    var d;
    switch (t) {
        case 'zero':
            d = '0';
            break;
        case 'one':
            d = '1';
            break;
        case 'two':
            d = '2';
            break;
        case 'three':
            d = '3';
            break;
        case 'four':
            d = '4';
            break;
        case 'five':
            d = '5';
            break;
        case 'six':
            d = '6';
            break;
        case 'seven':
            d = '7';
            break;
        case 'eight':
            d = '8';
            break;
        case 'nine':
            d = '9';
            break;

    }
    return d;
}

var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        line = line.split(';').map(textTodigit).join('');
        console.log(line);
    }
});
