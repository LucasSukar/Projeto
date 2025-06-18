const express = require('express');
const cors = require('cors');
const route = require('./routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(route);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
