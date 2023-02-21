const { options } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

//DIFERENCIAS ENTRE LOS DISTINTOS PROCESS.ARGV Y EL DE YARG
// console.log(process.argv);


//EXTRAER LA BASE QUE MANDAMOS COMO DATO

// const [,, arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');



// const base = 1;

crearArchivo( argv.b, argv.l, argv.h)
.then( nombreArchivo => console.log(nombreArchivo, ''))
.catch( err => console.log(err));

