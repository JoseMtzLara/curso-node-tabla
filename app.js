const argv = require('./config/yargs');
const colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();





// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

//!FORMA 1

// const tabla = () => {
//     for (let i = 1; i <= 10; i++){
//         let resultado = i * 5;
//         console.log(`5 * ${i} = ${resultado}`);
//     }
// }


// const base = 3;
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));