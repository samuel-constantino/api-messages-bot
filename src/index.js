const express = require('express');
const { json } = require('body-parser');

const logReport = require('./logger/logReport');

require('dotenv').config();

const app = express();

app.use(json());

// rotas

const PORT = process.env.SERVER_PORT || 5000;

// trocar console.log por winston
app.listen(PORT, () => logReport('info', 200, `Ouvindo a porta ${PORT}`));