var LivingCreature = require('./class.kendani.js');
module.exports = class gishatich extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.health = 3;
        this.caunt = 0;
        this.naxkinIndex = 0;
    }
    newcordinat() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(ch) {
        this.newcordinat();
        return super.chooseCell(ch);
    }
    move() {

        var tazaVandak = random(this.yntrelvandaky(1));

        if (tazaVandak) {

            this.caunt += 1;

            matrix[this.y][this.x] = this.naxkinIndex;
            matrix[tazaVandak[1]][tazaVandak[0]] = 3;

            this.y = tazaVandak[1];
            this.x = tazaVandak[0];
            this.naxkinIndex = 1;

            if (this.caunt >= 20) {
                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {

                        grassArr[i].tuyn = true;
                        this.caunt = 0;
                        if (grassArr[i].tuyn == true) {
                            this.health -= 1;
                        }
                    }
                }
                if (this.health == 0) {

                    this.die();

                }
            }


        }

    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
                break;
            }
        }


    }
    eat() {
        var tazaVandak = random(this.yntrelvandaky(2));
        if (tazaVandak) {

            matrix[tazaVandak[1]][tazaVandak[0]] = 3;
            matrix[this.y][this.x] = 0;
            this.y = tazaVandak[1];
            this.x = tazaVandak[0];


            for (var i in xotakerArr) {
                if (tazaVandak[0] == xotakerArr[i].x && tazaVandak[1] == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }



        }
        else {
            this.move();
        }


    }



}