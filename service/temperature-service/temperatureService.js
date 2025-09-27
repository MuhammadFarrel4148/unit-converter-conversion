const temperatureConversionService = (number, convertFrom, convertTo) => {
    let basis;
    let result;
    const round = Math.round(number * 100) / 100;

    switch(convertFrom) {
        case 'c':
            basis = round;
            break;
        case 'r':
            basis = (5 / 4) * round;
            break;
        case 'f':
            basis = (5 / 9 ) * (round - 32);
            break;
        case 'k':
            basis = round - 273;
            break;
    };

    switch(convertTo) {
        case 'c': 
            result = basis;
            break;
        case 'r':
            result = (4 / 5) * basis;
            break;
        case 'f':
            result = ((9 / 5) * basis) + 32;
            break;
        case 'k':
            result = basis + 273;
            break; 
    };

    return result;
};

module.exports = temperatureConversionService;