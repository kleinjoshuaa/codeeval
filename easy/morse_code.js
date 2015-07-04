function letterToTxt(l, i, a) {
    var morseMap = {
        '.-':'A',
        '-...':'B',
        '-.-.':'C',
        '-..':'D',
        '.':'E',
        '..-.':'F',
        '--.':'G',
        '....':'H',
        '..':'I',
        '.---':'J',
        '-.-':'K',
        '.-..':'L',
        '--':'M',
        '-.':'N',
        '---':'O',
        '.--.':'P',
        '--.-':'Q',
        '.-.':'R',
        '...':'S',
        '-':'T',
        '..-':'U',
        '...-':'V',
        '.--':'W',
        '-..-':'X',
        '-.--':'Y',
        '--..':'Z',
        '.----':'1',
        '..---':'2',
        '...--':'3',
        '....-':'4',
        '.....':'5',
        '-....':'6',
        '--...':'7',
        '---..':'8',
        '----.':'9',
        '-----':'0'
    }
    return morseMap[l];
}

function wordsToTxt(w, i, a) {
    var letters = w.split(' ');
    return letters.map(letterToTxt).join('');
}

function morseToTxt(s) {
    var words = s.split('  ');
    return words.map(wordsToTxt).join(' ');

}





var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(morseToTxt(line));
    }
});

