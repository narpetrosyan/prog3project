class gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
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
    yntrelvandaky(character) {
        this.newcordinat();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);

                }

            }
        }
        return found;
    }

}