var read = require ('read');
var quiz = require('./quiz.js');

var User = function() {
    this.name = "";
    this.currentPoints = 0;
    this.currentQuestion = 0;
}

User.prototype.checkIfNew = function() {
    var options = {
        prompt: "Are you a new user? (yes/no)\n"
    };
    read(options, this.checkIfNewPartII.bind(this));
}

User.prototype.checkIfNewPartII = function(err, yesNo) {
    if(yesNo.toUpperCase() == "yes".toUpperCase()){
        this.register();
    } else if(yesNo.toUpperCase() == "no".toUpperCase()) {
        this.login();
    } else {
        console.log("You mistyped your answer... (you idiot!)");
        this.checkIfNew();
    }
}

User.prototype.register = function() {
    var options = {
        prompt: "What's your name?\n"
    };
    read(options, this.registerPartII.bind(this));
}

User.prototype.registerPartII = function(err, name) {
    this.name = name;
    quiz1.start();
}

User.prototype.login = function() {
    var options = {
        prompt: "What's your name?\n"
    };
    read(options, this.loginPartII.bind(this));
}

User.prototype.loginPartII = function(err, name) {
    if(users.indexOf(name) != -1) {
        console.log("User exists!");
        quiz1.start();
    } else {
        console.log("YOU DON'T EXIST!!!");
    }
}

module.exports = User;
