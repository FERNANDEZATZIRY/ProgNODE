// 1. Importando el modulo de NODE http
      import http from 'http';
      import path from 'path';
      //let http = require ('http');

      // Recreando Built-in variables
  global["__dirname"] = path.dirname(new URL(import.meta.url).pathname); //objeto (dirname) ruta absoluta
  global["__filename"] =
  path.join(__dirname, path.basename (new URL(import.meta.url).pathname));

// 2. Crear el servidor con toda su logica
const server = http.createServer (( _, res)=> {
  // Toda la logica del server 
  // 1. Responde al cliente
res.write(`
__dirname: ${__dirname}
__filename: ${__filename}`);  // nos indica en que directorio estamos (filename)
  // 2. Cerrar la conexion
res.end();
});
  // 3. Arranca el servidor
        // server.listen(<Puerto>,<IP>,<cb>);
           server.listen(3000,"0.0.0.0",()=> {
            console.log("♥️ Servidor escuhcando en http://localhost:3000");
           });