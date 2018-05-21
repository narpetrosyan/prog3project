var side = 10;

var yQanak = 50;
var xQanak = 50;

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
    


    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');






}

function draw() {

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


}