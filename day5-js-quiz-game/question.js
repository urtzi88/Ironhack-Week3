function question() {
    var id = 0;
    return function(question, answer){
        id++;
        return {id: id, question: question, answer: answer, points: 10, bonus: false};
    }
}

module.exports = question;
