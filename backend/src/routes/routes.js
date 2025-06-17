const express = require('express');
const route = express.Router();

const usuariosController = require('../controllers/usuariosController');
const publicacoesController = require('../controllers/publicacoesController');
const validate = require('../middlewares/validate');
const publiValidation = require('../validators/publiValidation');
const userValidation= require('../validators/uservalidation');

// Usuários
route.get('/usuarios', usuariosController.getUsuario);
route.post('/usuarios', validate(userValidation),usuariosController.createUsuario);

// Publicações com validação
route.get('/publicacoes', publicacoesController.getPublicacoes);
//route.post('/publicacoes', validate(publiValidation), publicacoesController.createPublicacao);

module.exports = route;
