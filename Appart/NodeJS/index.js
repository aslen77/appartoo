const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const { mongoose } = require('./db.js'); //assignement

var pangolinController = require('./controllers/pangolinController.js');
var userController = require('./controllers/userController.js');

var app = express();
app.use(bodyParser.json()); 
app.use(cors({ origin: 'http://localhost:4200'}));

app.listen(3000, ()=> console.log('Serveur en marche sur le port : 3000'));

//localhost:3000/pangolins
app.use('/pangolins', pangolinController);
app.use('', userController);
