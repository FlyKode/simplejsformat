'use strict';

class FkNumbers {
    
    toLocale(number, locale) {
        return number.toLocaleString(locale);
    };

    currencyFormat (num) {
        return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }

    randomInt (low, high) {
        return Math.floor(Math.random() * (high - low) + low);
    }    
}

class FkString {
    leftPad (str, length) {
        str = str == null ? '' : String(str);
        length = ~~length;
        pad = '';
        padLength = length - str.length;
    
        while(padLength--) {
            pad += '0';
        }
    
        return pad + str;
    }
}

module.exports = { FkNumbers, FkString }