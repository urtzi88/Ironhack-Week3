var Viking = function (name, health, strength) {
    this.name = name;
    this.health = health;
    this.max_health = health;
    this.strength = strength;
    this.kills = 0;
    this.weapon;
};

Viking.prototype.attack = function(opponent) {
    opponent.health -= this.strength;
};

Viking.prototype.showAttributes = function() {
    console.log(this.name + " --> Health: " + this.health + " | Strength: " + this.strength);
};

Viking.prototype.rest = function() {
    this.health = this.max_health;
};

Viking.prototype.die = function() {
    this.health = "DEAD";
};

Viking.prototype.get_opponent_h = function(h) { //the viking recovers a fith of the damage inflicted
    this.health += Math.round(h/5);
    if(this.max_health <= this.health) {
        this.health = this.max_health;
    }
};

Viking.prototype.add_kill = function() { //the viking levels up increasing strength and max_health
    this.kills++;
    if(this.kills%3 == 0) {
        this.strength++;
        this.max_health += 10;
        console.log("Level up! New strength: " + this.strength + " and new Max_Health: " + this.max_health);
    }
};

Viking.prototype.get_weapon = function() {
    var weapons = ["axe", "spear", "bow", "shield"];
    this.weapon = weapons[Math.floor(Math.random() * weapons.length)];
    switch (this.weapon) {
        case "axe":
            this.strength += 10;
            break;
        case "spear":
            this.strength += 8;
            break;
        case "bow":
            this.strength += 7;
            break;
        case "shield":
            this.health += 10;
            break;
    }
};

vic1 = new Viking ("Vic1", 100, 5);
vic2 = new Viking ("Vic2", 70, 6);
vic1.get_weapon();
vic2.get_weapon();

module.exports = Viking;
