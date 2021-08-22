const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********': ' '
};

function decode(expr) {
    const arr = expr.match(/.{1,10}/g);
    let str = arr.join(',');
    let nothing = /00/gi;
    let dots = /10/gi;
    let dashes = /11/gi;
    let newNothing = str.replace(nothing, '');
    let newDots = newNothing.replace(dots, '.');
    let newDashes = newDots.replace(dashes, '-');
    let newArr = newDashes.split(',');
    let lastArr = [];
    for (let element in newArr) {
        for (let prop in MORSE_TABLE) {
            if (newArr[element] === prop) {
                lastArr.push(MORSE_TABLE[prop]);
            }
        }
    }
    let finalstr = lastArr.join('');
    return finalstr;
}

module.exports = {
    decode
}