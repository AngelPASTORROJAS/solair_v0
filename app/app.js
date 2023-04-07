require("dotenv-expand").expand(require("dotenv").config());

// Importation des modules nécessaires
const express = require("express");
const morgan = require("morgan");

// Création de l'application Express
const app = express();

// Importations des routes

// Configuration des middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Configuration des routes


// Configuration des gestionnaires d'erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Exportation de l'application Express et des variables d'environnement
module.exports = app;