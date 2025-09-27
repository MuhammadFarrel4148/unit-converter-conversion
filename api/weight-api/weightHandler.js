const weightConversionService = require("../../service/weight/weightService");

const weightConversionHandler = (number, convertFrom, convertTo) => {
    const transformConvertNumber = parseInt(number);

    const result = weightConversionService(transformConvertNumber, convertFrom, convertTo);

    console.log(`${transformConvertNumber} ${convertFrom} = ${result} ${convertTo}`); 
};

module.exports = weightConversionHandler