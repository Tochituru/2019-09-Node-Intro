//08-13
// console.log('Hola node');
// console.log(process);
// console.log(process.argv);
// console.log(process.argv[2]);
// console.log(`el archivo a compilar es: ${process.argv[2]}`);
// console.log(process.env.NODE_ENV);

//08-15
const moment = require('moment');
const restator = require('./modules/restator-export')

// const fechaDeHoy = moment().format('Do MMM YY, h:mm:ss a');
// const elementoA = process.argv[2];
// const elementoB = process.argv[3];


// console.log(`La fecha de hoy es ${fechaDeHoy}`);

// console.log(`${elementoA} menos ${elementoB} da ${restator(elementoA, elementoB)}`);


//08-20

const extractFromObjects = require('./modules/extractFromObjects')

let base_person = {
    name: 'calixta',
    last_name: '',
    birthdate: moment('24/09/1988', 'DD/MM/YYYY').format('DD/MM/YYYY'),
    address: {
        street_name: 'luis m campos',
        number: '',
        zip_code: '1425',
    }
}

console.log(extractFromObjects(base_person, ['birthdate']));
