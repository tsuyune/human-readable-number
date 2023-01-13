module.exports = function toReadable(number) {
    const M = new Map(Object.entries({
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }));

    const readDozens = (n) => {
        if (M.has(n.toString())) {
            return M.get(n.toString());
        } else {
            return (M.get((Math.trunc(n / 10) * 10).toString())) + " " + M.get((n % 10).toString());
        }
    }

    if (number < 100) {
        return readDozens(number);
    } else if (number > 100 && number < 200) {
        return ("one " + "hundred" + " " + readDozens(number % 100));
    } else if (number % 100 == 0) {
        return (M.get(Math.trunc(number / 100).toString()) + " " + "hundred");
    } else {
        return (M.get(Math.trunc(number / 100).toString()) + " " + "hundred" + " " + readDozens(number % 100));
    }
}
