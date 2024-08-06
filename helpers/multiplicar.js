const fs = require('fs');

//! FORMA 1
// const crearArchivo = (base = 3) => {

//   return new Promise( (resolve, reject) => {

//     console.log("===================");
//     console.log('Tabla del :', base );
//     console.log("===================");
//     let salida = "";
  
//     for (let i = 1; i <= 10; i++) {
//       salida += `${base} x ${i} = ${base * i}\n`;
//     }
//     console.log(salida);
  
//     //metodo fileSystemNode
  
//     // fs.writeFile( `tabla del ${base}.txt`, salida, (err) => {
//     //     if(err) throw err;
//     //     console.log(`tabla del ${base} txt creado`)
//     // } )
  
//     fs.writeFileSync(`tabla del ${base}.txt`, salida);
  
//     resolve(`tabla - ${base}.txt`);
//   })

 
// }


const crearArchivo = async(base = 3, listar = false, hasta = 10) => {

    try {
      
        let salida, consola = '';

      
        for (let i = 1; i <= hasta; i++) {
          salida += `${base} x ${i} = ${base * i}\n`;
          consola += `${base} ${'x'.green} ${i} ${'='.blue} ${base * i}\n`;
        }

        if(listar){
          console.log("===================");
          console.log('Tabla del :', base );
          console.log("===================");
          console.log(consola);
        }
     
      
        //metodo fileSystemNode
      
        // fs.writeFile( `tabla del ${base}.txt`, salida, (err) => {
        //     if(err) throw err;
        //     console.log(`tabla del ${base} txt creado`)
        // } )
      
        fs.writeFileSync(`./salida/tabla del ${base}.txt`, salida);
      
        return(`tabla - ${base}.txt`);

    } catch (error) {
        throw error;
    }
  
     

  
   
  }

module.exports = {
    crearArchivo
}
