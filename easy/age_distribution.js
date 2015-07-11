var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    'use strict';
    if (line !== "") {
        line = parseInt(line, 10);
        if (line > 100) {
            console.log("This program is for humans");
        } else if (line > 65) {
            console.log('The Golden Years');
        } else if (line > 22) {
            console.log('Working for the man');
        } else if (line > 18) {
            console.log('College');
        } else if (line > 14) {
            console.log('High School');
        } else if (line > 11) {
            console.log('Middle School');
        } else if (line > 4) {
            console.log('Elementary School');
        } else if (line > 2) {
            console.log('Preschool Maniac');
        } else if (line > -1) {
            console.log("Still in Mama's arms");
        } else {
            console.log("This program is for humans");
        }
    }
});
