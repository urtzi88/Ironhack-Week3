function decoder(msgArray){
    var index = 0;
    var secretMessage = "";
    msgArray.forEach(function(word){
        secretMessage += word.charAt(index);
        index = (index + 1) % 5;
    });
    return secretMessage;
}

module.exports = decoder;
