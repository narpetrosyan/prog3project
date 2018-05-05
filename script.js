var side = 10;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var gish_horse = [];
var yQanak = 50;
var xQanak = 50;

matrix = [];
// var matrix = [
//     [0, 0, 1, 0, 0, 0, 0],
//     [1, 0, 0, 0, 0, 0, 0],
//     [0, 1, 3, 3, 0, 0, 0],
//     [0, 3, 3, 0, 3, 0, 0],
//     [1, 1, 4, 1, 1, 3, 0],
//     [1, 1, 3, 1, 1, 0, 0],
//     [1, 1, 1, 1, 1, 0, 0]
// ];


function setup() {
    var dzi = 10;
    var gisha=30;
    var grassE = 60;
    for (var i = 0; i < yQanak; i++) {
        matrix[i] = [];
        for (var j = 0; j < xQanak; j++) {
            matrix[i][j] = Math.round(random(1)); 
        }  
    }
    while(dzi>=0){
        var x = Math.round(random(xQanak-1));
        var y = Math.round(random(yQanak-1));
        matrix[y][x]=4;
        dzi--;
    }
    while(gisha>=0){
        var x = Math.round(random(xQanak-1));
        var y = Math.round(random(yQanak-1));
        if(matrix[y][x]==0){
            matrix[y][x]=3;
            gisha--;
        }
        
    }
    while(grassE>=0){
        var x = Math.round(random(xQanak-1));
        var y = Math.round(random(yQanak-1));
        if(matrix[y][x]==0){
            matrix[y][x]=2;
            grassE--;
        }
        
    }
   

    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');




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

}

function draw() {
     if(gishatichArr.length>=5 && gishatich_horse.length == 0){
        var horse = new gishatich_horse(x, y, 4);
        console.log("cnva");
                gish_horse.push(horse);
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {

                for (var i in grassArr) {
                    if (x == grassArr[i].x && y == grassArr[i].y) {

                        if (grassArr[i].tuyn == true) {
                            fill(0, 50, 0);

                        }
                        else if (grassArr[i].tuyn == false) {
                            fill(0, 255, 0);

                        }
                    }
                }
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }

        }
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

}