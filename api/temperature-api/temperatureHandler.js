const temperatureConversionService = require("../../service/temperature-service/temperatureService");

const temperatureConversionHandler = (number, convertFrom, convertTo) => {
    try {
        const transformConvertNumber = parseInt(number);

        const result = temperatureConversionService(transformConvertNumber, convertFrom, convertTo);

        console.log(`${transformConvertNumber} ${convertFrom} = ${result} ${convertTo}`); 
        
    } catch(error) {
        console.error(error);
    }; 
};

module.exports = temperatureConversionHandler;