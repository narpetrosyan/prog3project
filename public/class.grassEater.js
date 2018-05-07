class grassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 20;



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
    move() {
        var tazaVandak = random(this.yntrelvandaky(0));

        if (tazaVandak) {

            matrix[tazaVandak[1]][tazaVandak[0]] = 2;
            matrix[this.y][this.x] = 0;
            this.y = tazaVandak[1];
            this.x = tazaVandak[0];
            this.energy--;
            if (this.energy == 0) {
                this.die();
            }
        }

    }

    mul() {

        var tazaVandak = random(this.yntrelvandaky(0));

        if (tazaVandak) {
            var tazaxotaker = new grassEater(tazaVandak[0], tazaVandak[1], this.index);
            xotakerArr.push(tazaxotaker);
            matrix[tazaVandak[1]][tazaVandak[0]] = 2;
            this.energy = 20;

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in xotakerArr) {

            if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                xotakerArr.splice(i, 1);
                break;
            }
        }


    }

    eat() {


        var tazaVandak = random(this.yntrelvandaky(1));


        if (tazaVandak) {



            this.energy++;
            var newX = tazaVandak[0];
            var newY = tazaVandak[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            var xotTunavor;
            for (var i in grassArr) {

                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    xotTunavor = grassArr[i].tuyn;

                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (xotTunavor == true) {
                this.die();

            }
            else if (this.energy >= 12) {
                this.mul();
                this.energy = 20;
            }

        }
        else {
            this.move();

        }

    }

}