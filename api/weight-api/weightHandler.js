const weightConversionService = require("../../service/weight-service/weightService");

const weightConversionHandler = (number, convertFrom, convertTo) => {
    try {
        const transformConvertNumber = parseInt(number);

        const result = weightConversionService(transformConvertNumber, convertFrom, convertTo);

        console.log(`${transformConvertNumber} ${convertFrom} = ${result} ${convertTo}`); 
        
    } catch(error) {
        console.error(error);
    };
};

module.exports = weightConversionHandler;