function apply_shift(code, shift, letter_case){
    if(code + shift < letter_case[0]){
        code = letter_case[1] + 1 + (shift - (letter_case[0] - code));
    }else if (code + shift > letter_case[1]) {
        code = letter_case[0] - 1 + (shift - (letter_case[1] - code));
    }else{
        code += shift;
    }
    return code;
}

module.exports = apply_shift;
