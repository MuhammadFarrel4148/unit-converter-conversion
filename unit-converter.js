const lengthConversionHandler = require("./api/length-api/lengthHandler");
const temperatureConversionHandler = require("./api/temperature-api/temperatureHandler");
const weightConversionHandler = require("./api/weight-api/weightHandler");

const [ , , command, ...argv] = process.argv;

const checkInput = (argv) => {
    if(argv.length !== 3) {
        console.error(`Dibutuhkan input number, convert from, dan convert to`);
    };
};

const checkCommand = (command, argv) => {
    checkInput(argv);

    switch(command) {
        case 'length':
            lengthConversionHandler(argv[0], argv[1], argv[2]);
            break
        case 'weight':
            weightConversionHandler(argv[0], argv[1], argv[2]);
            break;
        case 'temperature':
            temperatureConversionHandler(argv[0], argv[1], argv[2]);
            break;
        default:
            break;
    };
};

checkCommand(command, argv);