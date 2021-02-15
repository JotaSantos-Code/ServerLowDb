"use strict";

const lowDb = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

let db; // creamos la variable db para que se guarden aqui las cosas

async function createConexion() {
  const adapter = new FileAsync("db.json"); // definimos el archivo
  db = await lowDb(adapter); // aqui lo creamos
  db.defaults({ users: [] }).write(); // aqui lo rellenamos
}

const getConnection = () => db; // aqui creamos la conexion con db

module.exports = {
  createConexion,
  getConnection,
};
