const argv = require('yargs')
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
})
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Es la cantidad maxima que establece el limite de nuestra multiplicacion'
})
.check( (argv, options) => {
    if( isNaN(argv.b) || isNaN(argv.h)){
        throw 'El dato tiene que ser un numero'
    }
    return true
})

.argv;

module.exports = argv;