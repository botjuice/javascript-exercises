const palindromes = function (text) {
    let letters = "";
    let reverseLetters = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i].match(/^[A-Za-z0-9]*$/)) {
            letters += text[i].toLowerCase();
        }
    }

    for (let i = letters.length - 1; i >= 0; i--) {
        reverseLetters += letters[i];
    }
    //return reverseLetters;
    return reverseLetters === letters;
};

// Do not edit below this line
module.exports = palindromes;
