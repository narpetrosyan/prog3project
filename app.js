var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});

var grass = require('./classis/class.grass.js');
var grassEater = require('./classis/class.grassEater.js');
var gishatich = require('./classis/class.gishatich.js');
var gishatich_horse = require('./classis/class.gishatich_horse.js');

grassArr = [];
xotakerArr = [];
gishatichArr = [];
gish_horse = [];
var yQanak = 50;
var xQanak = 50;

matrix = [];


var dzi = 10;
var gisha = 30;
var grassE = 60;
for (var i = 0; i < yQanak; i++) {
    matrix[i] = [];
    for (var j = 0; j < xQanak; j++) {
        matrix[i][j] = Math.floor(Math.random()*2);
    }
}
while (dzi >= 0) {
    var x = Math.round(random(xQanak - 1));
    var y = Math.round(random(yQanak - 1));
    matrix[y][x] = 4;
    dzi--;
}
while (gisha >= 0) {
    var x = Math.round(random(xQanak - 1));
    var y = Math.round(random(yQanak - 1));
    if (matrix[y][x] == 0) {
        matrix[y][x] = 3;
        gisha--;
    }

}
while (grassE >= 0) {
    var x = Math.round(random(xQanak - 1));
    var y = Math.round(random(yQanak - 1));
    if (matrix[y][x] == 0) {
        matrix[y][x] = 2;
        grassE--;
    }

}




for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] == 1) {
            var gras = new Grass(x, y, 1);
            grassArr.push(gras);
        }
        else if (matrix[y][x] == 2) {
            var xotak = new grassEater(x, y, 2);
            xotakerArr.push(xotak);
        }
        else if (matrix[y][x] == 3) {
            var gish = new gishatich(x, y, 3);
            gishatichArr.push(gish);
        }
        else if (matrix[y][x] == 4) {
            var horse = new gishatich_horse(x, y, 4);
            gish_horse.push(horse);
        }
    }
}
if (gishatichArr.length >= 5 && gishatich_horse.length == 0) {
    var horse = new gishatich_horse(x, y, 4);
    console.log("cnva");
    gish_horse.push(horse);
}

for (var i in grassArr) {
    grassArr[i].mul();
}
for (var i in xotakerArr) {
    xotakerArr[i].eat();
}
for (var i in gishatichArr) {
    gishatichArr[i].eat();
}
for (var i in gish_horse) {
    gish_horse[i].eat();
}