var Viking = require('./viking.js');

var Pit = function(viking1, viking2) {
    this.turns = 10;
    this.viking1 = viking1;
    this.viking2 = viking2;
    this.winner;
    this.fight = function() {
        var i = 0;
        while(i < this.turns && viking2.health > 10 && viking1.health > 10) {
            viking1.attack(viking2);
            viking2.attack(viking1);
            console.log("ROUND #" + (i+1) + "--------------------------");
            viking1.showAttributes();
            viking2.showAttributes();
            i++;
        }
        if(!this.winner){
            viking1.health > viking2.health ? this.winner = viking1 : this.winner = viking2;
        }
        this.winner.max_health += 10;
        this.winner.strength++;
        console.log("\nAnd the winner is...: " + this.winner.name + "!!!!!!\n");
    };
    this.showOponents = function() {
        console.log("--------------------");
        console.log("Fighting in the pit:");
        viking1.showAttributes();
        viking2.showAttributes();
        console.log("--------------------");
    };
};

var newpit = new Pit(vic1, vic2);
newpit.showOponents();
newpit.fight();
vic1.rest();
vic2.rest();
newpit.showOponents();
