var read = require ('read');
var question = require('./question.js')

var Quiz = function(questions) {
    this.questions = questions;
    this.index = 0;
    this.totalPoints = 0;
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
        prompt: sentence + this.questions[this.index].text + "\n"
    };
    read(options, this.checkUserAnswer.bind(this));
}

Quiz.prototype.checkUserAnswer = function(err, answer) {
    if(this.questions[this.index].answer == answer) {
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

var questionsArr = [question1, question2, question3];
quiz1 = new Quiz(questionsArr);
quiz1.start();
