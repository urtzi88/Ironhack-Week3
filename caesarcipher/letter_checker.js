function is_a_letter(letter){
    if(letter >= "A" && letter <= "Z"){
        return [65,90];
    }else if (letter >= "a" && letter <= "z") {
        return [97,122];
    }else{
        return false;
    }
}

module.exports = is_a_letter;
