const app = require('./app/app');

const port = 3000;

app.listen(port, () => {
  console.log(`Serveur démarré en http://localhost:${port}`);
});