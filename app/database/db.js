const mysql = require('mysql');

require("dotenv-expand").expand(require("dotenv").config());
const {config} = require('./../config/config');

const dbConfig = config.get('database');

const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ', err);
    return;
  }
  console.log('Connexion à la base de données réussie');
});

module.exports = connection;