var LivingCreature = require('./class.kendani.js');
module.exports = class Grass extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.multiply = 0;
	    this.tuyn = false;
    }

    
    mul() {
        this.multiply++;
        var tazaVandak = random(this.yntrelvandaky(0));

        if (this.multiply >= 3 && tazaVandak) {
            var tazaXot = new Grass(tazaVandak[0], tazaVandak[1], this.index);
            grassArr.push(tazaXot);
            matrix[tazaVandak[1]][tazaVandak[0]] = 1;
            this.multiply = 0;

        }
    }
}


