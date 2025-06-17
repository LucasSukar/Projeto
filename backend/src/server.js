const express = require("express");
const app = express();
const routes = require('./routes/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes); // todas as rotas centralizadas aqui

const start = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Api running at: http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};
start(3333);