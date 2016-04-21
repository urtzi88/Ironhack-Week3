var Viking = require('./viking.js');
var Saxon = require('./saxon.js');

var Saxon_town = function(invaders) {
    this.invaders = invaders
    this.population = 50;
    this.people = [];
    this.deaths = 0;
    this.turns = Math.floor(Math.random() * (4) + 5);
    this.slaughter = function() {
        var index = 1
        while(index <= this.turns) {
            console.log("ROUND #" + index +" ------------------------------------");
            var viking = this.invaders[Math.floor(Math.random() * this.invaders.length)];
            var saxon = this.people[Math.floor(Math.random() * this.people.length)];
            var sih = saxon.health; //saxon initial health
            while(saxon.health >= 0 && viking.health >= 0) {
                viking.attack(saxon);
                saxon.attack(viking);
            }
            if(saxon.health <= 0){
                saxon.die();
                this.deaths++;
                viking.get_opponent_h(sih)
                viking.add_kill();
            }
            if(viking.health <= 0){
                viking.die();
            }
            console.log("Saxon: " + saxon.health);
            console.log(viking.name + " --> Health: " + viking.health + " | Strength: " + viking.strength);
            index++;
        }
    };
    this.showStats = function() {
        var vikings_deaths = viking_attackers.length - this.invaders.length;
        console.log("---------------------------------------------")
        console.log("Saxon deaths: " + this.deaths + " | " + (this.deaths/this.population*100) + "%");
        console.log("Viking deaths: " + vikings_deaths + " | " + (vikings_deaths/viking_attackers.length*100) + "%");
    };
}

var viking_attackers = [vic1, vic2];

saxon_town1 = new Saxon_town(viking_attackers);
for(var i = 0; i < saxon_town1.population; i++){
    var sax = new Saxon();
    saxon_town1.people.push(sax);
}

saxon_town1.slaughter();
saxon_town1.showStats();
