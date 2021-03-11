module.exports = function toReadable (number) {
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let tens = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number == 0) {
        return 'zero';
    }

    if (number <= 20) {
        return units[number];
    }

    if (number.toString().length == 2 && number % 10 == 0) {
        return tens[parseInt((''+number)[0])];
    }

    if (number.toString().length == 2) {
        return tens[parseInt((''+number)[0])] + ' ' + units[parseInt((''+number)[1])];
    }

    if (number.toString().length == 3 && number % 100 == 0){
        return units[parseInt((''+number)[0])] + ' hundred';
    }

    if (number.toString().length == 3 && parseInt(number.toString().substr(1)) <= 20 ) {
        let x = parseInt(number.toString().substr(1));
        return units[parseInt((''+number)[0])] + ' hundred ' + units[x];
    }

    if (number.toString().length == 3 && number % 10 == 0) {
        return units[parseInt((''+number)[0])] + ' hundred ' + tens[parseInt((''+number)[1])];
    }

    if (number.toString().length == 3) {
        return units[parseInt((''+number)[0])] + ' hundred ' + tens[parseInt((''+number)[1])] + ' ' + units[parseInt((''+number)[2])];
    }

}
