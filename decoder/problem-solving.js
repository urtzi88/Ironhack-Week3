var words, message
words = ["dead", "bygone", "landing", "cheaply", "assumed", "incorrectly", "attention", "agent"];
words2 = ["January", "lacks", "caveats", "hazardous", "DOORS", "crying", "arrogantly", "climate", "proponent", "rebuttal"];

function decoder(msgArray){
    var index = 0;
    var secretMessage = "";
    msgArray.forEach(function(word){
        secretMessage += word.charAt(index);
        index = (index + 1) % 5;
    });
    return secretMessage;
}

function super_decoder(sentence, how){
    var msgArray = [], behaviour = [], sentenceArray = [];
    var dir, even_odd;
    sentenceArray = sentence.split(' ');
    if (how.indexOf('-')){
        dir = how.split('-')[1];
        even_odd = how.split('-')[0];
        msgArray = wordsEvenOdd(sentenceArray,even_odd);
    }else{
        dir = how;
    }
    if (dir.toLowerCase() == "backwards"){
        msgArray = msgArray.reverse();
    }
    return msgArray;
}

function wordsEvenOdd(sentenceArray,even_odd){
    var msgArray = [];
    switch (even_odd.toLowerCase()) {
        case "even":
            for (var i = 0; i < sentenceArray.length; i += 2){
                msgArray.push(sentenceArray[i]);
            }
            break;
        case "odd":
            for (var i = 1; i < sentenceArray.length; i += 2){
                msgArray.push(sentenceArray[i]);
            }
            break;
        case "all":
            msgArray = sentenceArray;
            break;
    }
    return msgArray;
}

var sentence = "Fill the proper tank for the cow";
var sentence1 = "Attack her nose under here with an itch"
var sentence2 = "Raul Nuñez call never finished"
var sentence3 = "Start rapping this or countless queasy wizards give back jay-z"
var sentence4 = "inner peace is overrated"
var sentence5 = "Fill the proper tank for the cow"


message1 = decoder(super_decoder(sentence1, 'all-backwards'));
message2 = decoder(super_decoder(sentence2, 'all-forwards'));
message3 = decoder(super_decoder(sentence3, 'all-backwards'));
message4 = decoder(super_decoder(sentence4, 'even-forwards'));
message5 = decoder(super_decoder(sentence5, 'even-backwards'));

console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);
console.log(message5);
