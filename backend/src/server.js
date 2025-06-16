const express = require("express");
const yup = require("yup");
const app = express();
const routes = require('./routes/routes')
app.use(express.json());
app.use(express.urlencoded({extended:true})) //pra ver os conteudo do post
app.use(routes) // para rotas


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