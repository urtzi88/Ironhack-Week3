var read = require ('read');
var quiz = require('./quiz.js');
var question = require('./question.js');
var user = require('./user.js');


// var jsonFile = "./JSON";
// var file = new File(jsonFile, "write");
//var str = JSON.stringify(JsonExport);
//file.open("write"); // open file with write access
//file.writeline(str);
//file.close();

var quest = new question();
var question1 = quest("Which year are we in?", "2016");
var question2 = quest("which language is this quiz developed in?", "Javascript");
var question3 = quest("How much is 2 + 2?", "4")
var questionsArr = [question1, question2, question3];
var users = [new user()];
//var user = new User();

quiz1 = new quiz(questionsArr, users);

users[0].checkIfNew();
//user.checkIfNew();
