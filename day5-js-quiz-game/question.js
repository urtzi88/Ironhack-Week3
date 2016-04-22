var Question = function(text, id, answer) {
    this.text = text;
    this.id = id;
    this.answer = answer;
    this.points = 10;
    this.bonus = false;
}

question1 = new Question("Which year are we in?", 1, "2016");
question2 = new Question("which language is this quiz developed in?", 2, "Javascript");
question3 = new Question("How much is 2 + 2?", 3, "4");

module.exports = Question;
