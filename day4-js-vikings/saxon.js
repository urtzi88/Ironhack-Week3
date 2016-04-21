var Saxon = function () {
    this.health = Math.floor((Math.random() * 100) + 10);
    this.max_health = this.health;
    this.strength = Math.floor((Math.random() * 10) + 1);
};

Saxon.prototype.attack = function(viking) {
    if(Math.floor((Math.random() * 2)) == 0) {
        console.log("The saxon is too scared to fight back...");
    } else if (Math.floor((Math.random() * 2)) == 1) {
        console.log("The saxon fought back.");
        viking.health -= this.strength;
    }
};

Saxon.prototype.showAttributes = function() {
    console.log("Poor Saxon --> Health: " + this.health + " | Strength: " + this.strength);
};

Saxon.prototype.die = function() {
    this.health = "DEAD";
}

Saxon.prototype.get_opponent_h = function(h) {
    this.health += h;
}

sax1 = new Saxon();

module.exports = Saxon;
