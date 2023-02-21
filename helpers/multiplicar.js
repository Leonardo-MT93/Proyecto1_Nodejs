const fs = require('fs');
const colors = require('colors/safe')

const crearArchivo = async( base  = 5, l = false, h = 10 ) => {

    //  -------------------- PRIMERA MANERA  --------------------      

    // return new Promise( (resolve, reject) => {
    //     console.log('===========================');
    //     console.log(`       TABLA DEL ${base}`);
    //     console.log('===========================');
    //     let salida = '';
    //     for(let i = 1; i <= 10; i++){
    
    //         salida += `${base} x ${i} = ${base*i}\n`;
    //     }
    
    //     console.log(salida);
    
    //     // Grabamos la informacion en un txt
    
    //     fs.writeFileSync( `tabla-${base}.txt`, salida);
    
    //     resolve(`Tabla del ${base}.txt creada`); //Sustituimos el console.log por un resolve
    // });

    //------------------ SEGUNDA MANERA ASYNC --------------------

    try{
        
        
        let salida, consola = '';
        for(let i = 1; i <= h; i++){
    
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${colors.yellow('x')} ${i} ${colors.yellow('=')} ${base*i}\n`;
        }
    
        if(l){
            console.log(colors.bgCyan('==========================='));
            console.log(colors.yellow(`       TABLA DEL ${base}`));
            console.log(colors.bgCyan('==========================='));
            console.log(colors.magenta(consola));
            }

        // Grabamos la informacion en un txt
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    
        return  colors.rainbow(`Tabla del ${base}.txt creada`); //Sustituimos el console.log por un return en el caso de tener un ASYNC  
    }catch(err){
        throw err;
    }

}

module.exports = {
   crearArchivo
}