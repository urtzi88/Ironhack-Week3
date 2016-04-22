var read = require ('read');
var question = require('./question.js');
var user = require('./user.js');
var jsonfile = require('jsonfile');

var file = './JSON';

var Quiz = function(questions, users) {
    this.questions = questions;
    this.index = 0;
    this.totalPoints = 0;
    this.users = users;
}

Quiz.prototype.start = function() {
    this.randomBonusQ();
    this.askQuestion();
}

Quiz.prototype.askQuestion = function() {
    var sentence = "";
    if(this.questions[this.index].bonus) {
        sentence = "BONUS_QUESTION "
    }
    var options = {
        prompt: sentence + this.questions[this.index].question + "\n"
    };
    read(options, this.checkUserAnswer.bind(this));
}

Quiz.prototype.checkUserAnswer = function(err, answer) {
    switch (answer.toUpperCase()) {
        case 'SAVE':
        console.log("You pressed save!");
        var obj = [this, ]
        jsonfile.writeFile(file, this, function (err) {
            console.log(err)
        });
        break;
        default:
        if(this.questions[this.index].answer.toUpperCase() == answer.toUpperCase()) {
            console.log("Correct");
            this.addPoints();
            this.index++;
            if(this.index < this.questions.length){
                this.askQuestion();
            } else {
                this.showFinalScore();
            }
        } else {
            console.log("Incorrect");
            this.questions[this.index].points--;
            this.askQuestion();
        }
    }

}

Quiz.prototype.addPoints = function() {
    this.totalPoints += (this.questions[this.index].points);
}

Quiz.prototype.showFinalScore = function() {
    console.log("Total Points: " + this.totalPoints);
}

Quiz.prototype.randomBonusQ = function() {
    var random = Math.floor(Math.random()*this.questions.length);
    this.questions[random].bonus = true;
    this.questions[random].points += 10;
}

module.exports = Quiz;
