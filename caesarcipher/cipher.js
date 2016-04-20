var letter_checker = require('./letter_checker.js');
var shift_applier = require('./shift_applier.js');

function caesarCipher (message, shift) {
    var shift = shift || -3;
    var letters = message.split('');
    var enc_msg = [];
    letters.map(function(letter){
        var code = (letter.charCodeAt(0));
        var letter_case = letter_checker(letter);
        if(letter_case){
            code = shift_applier(code, shift, letter_case);
        }
        var coded_letter = String.fromCharCode(code);
        enc_msg.push(coded_letter);
    });
    return enc_msg.join('');
}

var encrypted = caesarCipher("Jloyvu xy koy ymni zohwcihu.", 6);
console.log(encrypted);
