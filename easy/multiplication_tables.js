////Sample code to read in test cases:
//var fs  = require("fs");
//fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
//    if (line != "") {
//        //do something here
//        //console.log(answer_line);
//    }
//});


var idx,lineNo,lineStr,numSpaces,j;

for (lineNo =1; lineNo <= 12; lineNo+=1) {
    lineStr = '';
    for(idx =1; idx <= 12; idx+=1) {
        if (idx >1) {
            numSpaces =  (4 - (idx*lineNo).toString().length);
            for(j = 0; j < numSpaces; j+=1) {
                lineStr += ' ';
            }
        }
        lineStr+= (idx*lineNo);
    }
    console.log(lineStr);
}
