const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

//configurando o app espress

const app = express();

//configurando Log

app.use(logger('dev'));

//Parse incoming requests data

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Setup a default catch-all route that sends back a welcome message in JSON format.

require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Bem-vindo ao Início do Nada.',
}));

module.exports = app;