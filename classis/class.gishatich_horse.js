var LivingCreature = require('./class.kendani.js');

module.exports = class gishatich_horse extends LivingCreature {

    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 6;
    }

    newcordinat() {
        this.directions_eat = [
            [this.x - 1, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 1]
        ];

        this.directions_move = [
            [this.x - 2, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 2],

        ];

    }
    yntrelvandaky(character) {
        this.newcordinat();
        var found = [];

        for (var i in this.directions_eat) {
            var x = this.directions_eat[i][0];
            var y = this.directions_eat[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions_eat[i]);

                }

            }
        }
        return found;
    }
    eat() {
        var tazaVandak = random(this.yntrelvandaky(3));
        if (tazaVandak) {

            matrix[tazaVandak[1]][tazaVandak[0]] = 4;
            matrix[this.y][this.x] = 0;
            this.y = tazaVandak[1];
            this.x = tazaVandak[0];


            for (var i in gishatichArr) {
                if (tazaVandak[0] == gishatichArr[i].x && tazaVandak[1] == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }



        }
        else {

            this.move();
        }


    }
    yntrelvandaky1(character1) {
        this.newcordinat();
        var found = [];

        for (var i in this.directions_move) {
            var x = this.directions_move[i][0];
            var y = this.directions_move[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character1) {
                    found.push(this.directions_move[i]);

                }

            }
        }
        return found;
    }
    move() {
        var tazaVandak = random(this.yntrelvandaky1(0));

        if (tazaVandak) {
            this.energy--;

            matrix[tazaVandak[1]][tazaVandak[0]] = 4;
            matrix[this.y][this.x] = 0;
            this.y = tazaVandak[1];
            this.x = tazaVandak[0];
            if (this.energy == 0) {

                this.die();
            }

        }

    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gish_horse) {

            if (this.x == gish_horse[i].x && this.y == gish_horse[i].y) {
                gish_horse.splice(i, 1);
                break;
            }
        }
    }

}