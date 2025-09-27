const lengthConverter = require('../../models/length-converter');

const lengthConversionService = (number, convertFrom, convertTo) => {
    const round = Math.round(number * 100) / 100;
    const result = (round * lengthConverter[convertFrom]) / lengthConverter[convertTo];

    return result;
};

module.exports = lengthConversionService