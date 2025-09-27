const lengthConversionService = require("../../service/length-service/lengthService");

const lengthConversionHandler = (convertNumber, convertFrom, convertTo) => {
    try {
        const transformConvertNumber = parseInt(convertNumber);

        const result = lengthConversionService(transformConvertNumber, convertFrom, convertTo);

        console.log(`${transformConvertNumber} ${convertFrom} = ${result} ${convertTo}`);   

    } catch(error) {
        console.error(error);
    };
};

module.exports = lengthConversionHandler;