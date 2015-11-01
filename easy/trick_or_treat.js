

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    'use strict';
    var monsters, kidsCount, candiesCount, candiesPerKid;
    if (line !== "") {
        monsters = JSON.parse('{' + line.replace(/[A-Za-z]+/g, '"$&"') + '}');
        kidsCount = monsters.Vampires + monsters.Zombies + monsters.Witches;
        candiesCount = 0;
        candiesCount += 3 * monsters.Vampires;
        candiesCount += 4 * monsters.Zombies;
        candiesCount += 5 * monsters.Witches;
        candiesCount *= monsters.Houses;

        candiesPerKid = Math.floor(candiesCount / kidsCount);

        console.log(candiesPerKid);
    }
});
