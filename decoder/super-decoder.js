var decoder = require('./decoder.js');

function super_decoder(sentence, how){
    var msgArray = [], behaviour = [], sentenceArray = [];
    var dir = "", even_odd = "";
    sentenceArray = sentence.split(' ');
    if (how.indexOf('-') >= 0){
        dir = how.split('-')[1];
        even_odd = how.split('-')[0];
        sentenceArray = wordsEvenOdd(sentenceArray,even_odd);
    }else{
        dir = how;
    }
    if (dir.toLowerCase() == "backwards"){
        msgArray = sentenceArray.reverse();
    } else {
        msgArray = sentenceArray;
    }
    return decoder(msgArray);
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

module.exports = super_decoder;
