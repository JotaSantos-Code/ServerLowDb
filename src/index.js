'use strict';


const app = require('./app');  // llamamos al servidor
const { createConexion } = require('./database');  // llamamos a la base de datos


createConexion();  // inicio la conexion
app.listen(3003);
console.log('Listening...', 3003)