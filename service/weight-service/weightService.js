const weightConverter = require("../../models/weight-converter");

const weightConversionService = (number, convertFrom, convertTo) => {
    const round = Math.round(number * 100) / 100;
    const result = (round * weightConverter[convertFrom]) / weightConverter[convertTo];

    return result;
};

module.exports = weightConversionService;